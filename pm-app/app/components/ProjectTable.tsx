'use client'
import { useState, useEffect } from "react";
import { fetchProjects } from "../server-actions/fetchProjects";
import { FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ProjectTable = () => {
    const [projects, setProjects] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        const fetchTasksandUsers = async () => {
            setLoading(true);
            const { allProjects } = await fetchProjects();
            setProjects(allProjects);
            setLoading(false);
        }
        fetchTasksandUsers();
    }, [])
    const handleViewTasks = () => {
        router.push('/projects');
    }
    return (
        <div className="overflow-x-auto  p-10">
            {loading ?
                <>
                    <div className="flex flex-row">
                        <span className="loading loading-bars loading-lg ml-auto mr-5 text-neutral"></span>
                        <h2 className="font-bold text-2xl mt-1">Loading Projects</h2>
                        <span className="loading loading-bars loading-lg text-center ml-5 mr-auto text-neutral"></span>
                    </div>
                </> :
                <table className="table">
                    <thead>
                        <tr>
                            <th className="font-bold bg-neutral text-white">#</th>
                            <th className="font-bold bg-neutral text-white">Project</th>
                            <th className="font-bold bg-neutral text-white">Code</th>
                            <th className="font-bold bg-neutral text-white">View Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects?.map((project: any, index: number) => (
                            <tr key={project.id}>
                                <td >
                                    {index+1}
                                </td>
                                <td className="font-bold">{project.project_title}</td>
                                <td>
                                   {project.project_code}
                                </td>
                                <td className=""><button className="ml-5 btn btn-xs" onClick={handleViewTasks}><FaEye/></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}

export default ProjectTable
