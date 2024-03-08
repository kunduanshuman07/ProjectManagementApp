
'use client'
import { AiOutlinePlus } from "react-icons/ai";
import AddTaskDialog from "../components/AddTaskDialog";
import { useState } from "react";
const ProjectHeader = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalClick = () => {
        setModalOpen(true);
    }
    return (
        <div>
            <button className="btn btn-neutral ml-10 mt-10" onClick={handleModalClick}>Add new task <AiOutlinePlus /></button>
            <AddTaskDialog modalOpen={modalOpen} setModalOpen={setModalOpen} callType="Add"/>
        </div>
    )
}

export default ProjectHeader