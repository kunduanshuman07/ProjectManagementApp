
'use client'
import { AiOutlinePlus } from "react-icons/ai";
import AddTaskDialog from "../components/AddTaskDialog";
import { useEffect, useState } from "react";
import { fetchUsers } from "../server-actions/fetchUsers";
interface ProjectHeaderProps {
    setHeaderTab: (headerTab: string) => void;
    headerTab: string;
}
const ProjectHeader: React.FC<ProjectHeaderProps> = ({ setHeaderTab, headerTab }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [users, setUsers] = useState<any>([]);
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
            <div className="flex flex-row">
                <button className={`btn btn-secondary ml-12 mt-10  btn-sm ${headerTab==='All'?'text-white':'btn-outline'}`} onClick={()=>setHeaderTab('All')}>All </button>
                <button className={`btn btn-info ml-12 mt-10  btn-sm ${headerTab==='In Progress'?'text-white':'btn-outline'}`} onClick={()=>setHeaderTab('In Progress')}>In Progress </button>
                <button className={`btn btn-success ml-12 mt-10  btn-sm ${headerTab==='Completed'?'text-white':'btn-outline'}`} onClick={()=>setHeaderTab('Completed')}>Completed </button>
                <button className="btn btn-neutral ml-12 mt-10 ml-auto mr-10" onClick={handleModalClick}>Add new task <AiOutlinePlus /></button>
            </div>
            <AddTaskDialog modalOpen={modalOpen} setModalOpen={setModalOpen} callType="Add" taskId={""} users={users} taskDetails={''} />
        </div>
    )
}

export default ProjectHeader