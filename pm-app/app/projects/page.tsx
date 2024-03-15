'use client'
import { useState, useEffect } from "react";
import Drawer from "../components/Drawer";
import GridTable from "../components/GridTable";
import ProjectHeader from "../components/ProjectHeader";
import { fetchTasks } from "../server-actions/fetchTasks";
import { fetchUsers } from "../server-actions/fetchUsers";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Page = () => {
    const { data } = useSession();
    const [filterValues, setFilterValues] = useState<any>(null);
    const [users, setUsers] = useState<any>([]);
    const [tasks, setTasks] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loginVerification, setLoginVerification] = useState<boolean>(true);
    useEffect(() => {
        if(data!=null){
            setLoginVerification(false);
        }
        const handleFilters = (allTasks: any) => {
            let filteredTasks: any[] = [];
            allTasks.map((task: any) => {
                const [assigneeId, assigneeName] = filterValues.assigneeFilter.split("|");
                const statusMatch = filterValues.statusFilter === '' || filterValues.statusFilter === 'All' || task.status === filterValues.statusFilter;
                const priorityMatch = filterValues.priorityFilter === '' || filterValues.priorityFilter === 'All' || task.priority === filterValues.priorityFilter;
                const assigneeMatch = filterValues.assigneeFilter === '' || task.assignee_id === assigneeId;
                const deadlineFromMatch = filterValues.deadlineFrom === '' || task.deadline >= filterValues.deadlineFrom;
                const deadlineToMatch = filterValues.deadlineTo === '' || task.deadline <= filterValues.deadlineTo;
                if (statusMatch && priorityMatch && assigneeMatch && deadlineFromMatch && deadlineToMatch) {
                    filteredTasks.push(task);
                }
            })
            setTasks(filteredTasks);
            setLoading(false);
        }
        const handleTaskSetting = (allTasks: any) => {
            if (filterValues !== null) {
                handleFilters(allTasks);
            }
            else {
                setTasks(allTasks);
                setLoading(false);
            }
        }
        const fetchTasksandUsers = async () => {
            setLoading(true);
            const { allTasks } = await fetchTasks();
            const { data } = await fetchUsers();
            setUsers(data);
            handleTaskSetting(allTasks);
        }
        fetchTasksandUsers();
    }, [filterValues, data]);
    
    return (
        <div>
            <Drawer />
            <ProjectHeader filterValues={filterValues} setFilterValues={setFilterValues} loginVerification={loginVerification}/>
            <GridTable tasks={tasks} users={users} loading={loading} loginVerification={loginVerification}/>
        </div>
    )
}

export default Page