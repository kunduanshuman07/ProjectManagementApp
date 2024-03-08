'use client'

import Drawer from "../components/Drawer";
import GridTable from "../components/GridTable";
import ProjectHeader from "../components/ProjectHeader";
const page = () => {
    return (
        <div>
            <Drawer />
            <ProjectHeader/>
            <GridTable />
        </div>
    )
}

export default page