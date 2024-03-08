import Drawer from "../components/Drawer";
import FetchTasks from "../components/FetchTasks";
import GridTable from "../components/GridTable";
import ProjectHeader from "../components/ProjectHeader";
const page = () => {
    return (
        <div>
            <Drawer />
            <ProjectHeader/>
            <FetchTasks/>
        </div>
    )
}

export default page