import Drawer from "../components/Drawer";
import FetchTasks from "../components/FetchTasks";
import ProjectHeader from "../components/ProjectHeader";
import { fetchUsers } from "../server-actions/fetchUsers";
const page = async() => {
    const {data} = await fetchUsers();
    return (
        <div>
            <Drawer />
            <ProjectHeader users={data}/>
            <FetchTasks/>
        </div>
    )
}

export default page