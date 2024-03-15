
'use client'
import { AiOutlinePlus } from "react-icons/ai";
import AddTaskDialog from "../components/AddTaskDialog";
import { useEffect, useState } from "react";
import { fetchUsers } from "../server-actions/fetchUsers";
import { FaFilter } from "react-icons/fa";
import FilterDialog from "./FilterDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import DeleteAllTaskDialog from "./DeleteAllTasks";

interface ProjectHeaderProps {
    filterValues: any;
    setFilterValues: (filterValues: any) => void;
    loginVerification: boolean;
    selectedTasks: any;
    setSelectedTasks: (selectedTasks: any) => void;
    handleDeleteAllTasks: () => void;
    tasksCount: any;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ filterValues, setFilterValues, loginVerification, selectedTasks, tasksCount, handleDeleteAllTasks }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [users, setUsers] = useState<any>([]);
    const [filterDialogOpen, setFilterDialogOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const handleDeleteAllModal = () => {
        setDeleteModalOpen(true);
    }
    useEffect(() => {
        const fetchAllUsers = async () => {
            const { data } = await fetchUsers();
            setUsers(data);
        }
        fetchAllUsers();
    }, [])
    const handleModalClick = () => {
        setModalOpen(true);
    }
    return (
        <div>
            <div className="flex flex-row bg-neutral">
                <button className="btn btn-neutral my-5 mr-auto ml-10 btn-info text-white font-bold" onClick={() => setFilterDialogOpen(true)}>Filters <FaFilter /></button>
                <button className="btn my-5 mr-10 ml-auto" onClick={handleModalClick}>Add new task <AiOutlinePlus /></button>
            </div>
            {tasksCount > 0 && selectedTasks.length > 0 && <button className="btn btn-error text-white font-bold btn-xs ml-5 mt-5" onClick={handleDeleteAllModal}>Delete all selected tasks</button>}
            <AddTaskDialog modalOpen={modalOpen} setModalOpen={setModalOpen} callType="Add" taskId={""} users={users} taskDetails={''}
                loginVerification={loginVerification} />
            <FilterDialog modalOpen={filterDialogOpen} setModalOpen={setFilterDialogOpen} setFilterValues={setFilterValues} users={users} />
            {deleteModalOpen && <DeleteAllTaskDialog modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen} handleDeleteAllTasks={handleDeleteAllTasks} />}
        </div>
    )
}

export default ProjectHeader