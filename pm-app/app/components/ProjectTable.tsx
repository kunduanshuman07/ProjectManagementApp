'use client'
import { useState, useEffect } from "react";
import { fetchProjects } from "../server-actions/fetchProjects";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditProjectModal from "./EditProjectModal";
import { fetchProjectData } from "../server-actions/fetchProjectData";
import DeleteProject from "./DeleteProject";
import { FaAngleDoubleDown } from "react-icons/fa";
const ProjectTable = () => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const [projects, setProjects] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [deleteModal, setdeleteModal] = useState<boolean>(false);
    const [actionId, setActionId] = useState<any>();
    const [actionData, setActionData] = useState<any>();
    useEffect(() => {
        const fetchTasksandUsers = async () => {
            setLoading(true);
            const { allProjects } = await fetchProjects();
            setProjects(allProjects);
            setLoading(false);
        }
        fetchTasksandUsers();
    }, [])
    const handleEdit = async (projectId: any) => {
        setActionId(projectId);
        const { message, data } = await fetchProjectData({ projectId });
        setActionData(data);
        setModalOpen(true);
    }
    const handleDelete = (projectId: any) => {
        setActionId(projectId);
        setdeleteModal(true);
    }
    return (
        <div className="overflow-x-auto p-4">
            {loading ?
                <div className='flex flex-row rounded mt-20'>
                    <h1 className='font-bold ml-auto mr-5 text-accent'>Loading Projects ...</h1>
                    <span className='loading text-accent font-bold loading-bars text-center mr-auto'></span>
                </div>
                :
                projects.length === 0 ?
                    <div className="flex flex-row"><h1 className={`text-error mt-2 text-center font-bold mb-2 ${screenWidth<1000?'mx-auto':'mx-auto'}`}>No projects found!</h1></div>
                    :
                    screenWidth >= 1000 ? <table className="table border rounded">
                        <thead>
                            <tr>
                                <th className="font-bold">#</th>
                                <th className="font-bold">Project</th>
                                <th className="font-bold">Code</th>
                                <th className="font-bold">Project Deadline</th>
                                <th className="font-bold">Edit</th>
                                <th className="font-bold">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects?.map((project: any, index: number) => (
                                <tr key={project.id}>
                                    <td >
                                        {index + 1}
                                    </td>
                                    <td className="font-bold">{project?.project_title}</td>
                                    <td>
                                        <button className="btn btn-xs btn-primary">{project?.project_code}</button>
                                    </td>
                                    <td>{project.deadline}</td>
                                    <td>
                                        <button className="btn btn-xs" onClick={() => handleEdit(project?.id)}><FaEdit /></button>
                                    </td>
                                    <td>
                                        <button className="btn btn-xs" onClick={() => handleDelete(project?.id)}><MdDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                        <div className="flex flex-col">
                            <button className="btn btn-accent text-white font-bold btn-sm">All Projects <FaAngleDoubleDown/></button>
                            {projects?.map((project: any, index: number) => (
                                <div className="p-5 shadow-md rounded mt-2" key={index}>
                                    <h1 className="font-bold">Task #{index + 1} <span className="text-primary font-bold ml-2">{project?.project_code}</span></h1>
                                    <h1 className="mt-3 font-bold text-neutral text-xl">{project?.project_title}</h1>
                                    <h1 className="mt-3 font-bold text-neutral">Deadline: {project?.deadline}</h1>
                                    <div className="flex flex-row mt-3">
                                        <button className="btn btn-xs" onClick={() => handleEdit(project?.id)}>Edit</button>
                                        <button className="btn btn-xs btn-error text-white ml-5" onClick={() => handleDelete(project?.id)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
            }
            {modalOpen && <EditProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} projectData={actionData} projectId={actionId} />}
            {deleteModal && <DeleteProject modalOpen={deleteModal} setModalOpen={setdeleteModal} projectId={actionId} />}
        </div>
    )
}

export default ProjectTable
