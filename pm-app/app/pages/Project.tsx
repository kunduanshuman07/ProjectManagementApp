'use client'
import AddTaskDialog from "../components/AddTaskDialog";
import Drawer from "../components/Drawer";
import GridTable from "../components/GridTable";
import { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
const Project = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <div>
            <Drawer />
            <ProjectHeader setModalOpen={setModalOpen}/>
            <AddTaskDialog modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <GridTable />
        </div>
    )
}

export default Project