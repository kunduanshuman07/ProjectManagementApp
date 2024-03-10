import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { editProject } from "../server-actions/editProject";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    projectId: any;
    projectData: any;
}

const EditProjectModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, projectId, projectData }) => {
    console.log(projectId, projectData);
    const [projectTitle, setProjectTitle] = useState<string>(projectData[0].project_title);
    const [projectCode, setProjectCode] = useState<string>(projectData[0].project_code);
    const [deadline, setDeadline] = useState<any>(projectData[0].deadline);
    const [loading, setLoading] = useState<boolean>(false);
    const handleModalClose = () => {
        setModalOpen(false);
    }
    const handleUpdateProject = async() => {
        setLoading(true);
        const {message} = await editProject({projectTitle, projectCode, deadline, projectId});
        if(message==='Success'){
            setLoading(false);
            setModalOpen(false);
            window.location.reload();
        }
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-5xl">
                <div className='flex flex-row'>
                    <button className="btn btn-outline btn-success text-white font-bold no-animation">
                        Add New Project
                    </button>
                    <button className="btn ml-auto" onClick={handleModalClose}>Close</button>
                </div>
                <div className="p-2">
                <label htmlFor="projectTitle" className="block text-black mb-2 my-5">Project Title</label>
                <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="grow border border-gray-600 rounded py-2 px-3 w-full"
                    placeholder="Project Title"
                    required
                />
                <label htmlFor="projectCode" className="block text-black mb-2 my-5">Add Project code</label>
                <input
                    type="text"
                    id="projectCode"
                    name="projectCode"
                    value={projectCode}
                    onChange={(e) => setProjectCode(e.target.value)}
                    className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                    placeholder="Add some unique Project code which should not match any project codes"
                    required
                />
                <label htmlFor="deadline" className="block text-black mb-2 my-5">Deadline</label>
                <label className="input input-bordered flex items-center gap-2 my-1">
                    <input type="date" className="grow" placeholder="Deadline" name="deadline" id="deadline" value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
                </label>
                </div>
                <button className="btn btn-accent mt-5" onClick={handleUpdateProject}>Update Project<AiOutlineEdit />{loading&&<span className="loading loading-dots loading-md"></span>}</button>
            </div>
        </dialog>
    )
}

export default EditProjectModal