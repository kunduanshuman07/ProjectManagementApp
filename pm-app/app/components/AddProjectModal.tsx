import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { addProject } from "../server-actions/addProject";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
}

const AddProjectModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
    const [projectTitle, setProjectTitle] = useState<string>('');
    const [projectCode, setProjectCode] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleModalClose = () => {
        setModalOpen(false);
    }
    const handleAddProject = async() => {
        setLoading(true);
        const {message} = await addProject({projectTitle, projectCode});
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
                </div>
                <button className="btn btn-accent mt-5" onClick={handleAddProject}>Add Project<AiOutlinePlus />{loading&&<span className="loading loading-dots loading-md"></span>}</button>
            </div>
        </dialog>
    )
}

export default AddProjectModal