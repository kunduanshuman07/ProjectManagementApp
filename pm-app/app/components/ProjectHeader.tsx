
'use client'
import { AiOutlinePlus } from "react-icons/ai";
import AddTaskDialog from "../components/AddTaskDialog";
import { useEffect, useState } from "react";
import { fetchUsers } from "../server-actions/fetchUsers";
import { FaFilter } from "react-icons/fa";
import FilterDialog from "./FilterDialog";

interface ProjectHeaderProps{
    filterValues: any;
    setFilterValues: (filterValues: any) => void;
}

const ProjectHeader:React.FC<ProjectHeaderProps> = ({filterValues, setFilterValues}) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [users, setUsers] = useState<any>([]);
    const [filterDialogOpen, setFilterDialogOpen] = useState<boolean>(false);
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
                <button className="btn btn-neutral my-5 mr-auto ml-10 btn-info text-white font-bold" onClick={()=>setFilterDialogOpen(true)}>Filters <FaFilter/></button>
                <button className="btn my-5 mr-10 ml-auto" onClick={handleModalClick}>Add new task <AiOutlinePlus /></button>
            </div>
            <AddTaskDialog modalOpen={modalOpen} setModalOpen={setModalOpen} callType="Add" taskId={""} users={users} taskDetails={''} />
            <FilterDialog modalOpen={filterDialogOpen} setModalOpen={setFilterDialogOpen} setFilterValues={setFilterValues} users={users}/>
        </div>
    )
}

export default ProjectHeader