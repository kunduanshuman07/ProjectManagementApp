'use client'
import { useState } from "react";
import Drawer from "../components/Drawer";
import GridTable from "../components/GridTable";
import ProjectHeader from "../components/ProjectHeader";
const Page = () => {
    const [headerTab, setHeaderTab] = useState<string>('All');
    return (
        <div>
            <Drawer />
            <ProjectHeader setHeaderTab={setHeaderTab} headerTab={headerTab}/>
            <GridTable headerTab={headerTab}/>
        </div>
    )
}

export default Page