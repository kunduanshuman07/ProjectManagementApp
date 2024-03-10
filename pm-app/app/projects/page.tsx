'use client'
import { useState } from "react";
import Drawer from "../components/Drawer";
import GridTable from "../components/GridTable";
import ProjectHeader from "../components/ProjectHeader";
const Page = () => {
    const [filterValues, setFilterValues] = useState<any>();
    return (
        <div>
            <Drawer />
            <ProjectHeader filterValues={filterValues} setFilterValues={setFilterValues}/>
            <GridTable filterValues={filterValues}/>
        </div>
    )
}

export default Page