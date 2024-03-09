
'use client'
import { AiOutlinePlus } from "react-icons/ai";
import AddTaskDialog from "../components/AddTaskDialog";
import { useState } from "react";

interface ProjectHeaderProps{
    users: any[]|null;
}

const ProjectHeader:React.FC<ProjectHeaderProps> = ({users}) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalClick = () => {
        setModalOpen(true);
    }
    return (
        <div>
            <div className="flex flex-row">
                <button className="btn btn-neutral ml-12 mt-10" onClick={handleModalClick}>Add new task <AiOutlinePlus /></button>
            </div>
            <AddTaskDialog modalOpen={modalOpen} setModalOpen={setModalOpen} callType="Add" taskId={""} users={users}/>
        </div>
    )
}

export default ProjectHeader