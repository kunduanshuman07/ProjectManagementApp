import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { addProject } from "../server-actions/addProject";
import { useRouter } from "next/navigation";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    loginverification: boolean;
}

const AddProjectModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, loginverification }) => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const router = useRouter();
    const [projectTitle, setProjectTitle] = useState<string>('');
    const [projectCode, setProjectCode] = useState<string>('');
    const [deadline, setDeadline] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const handleModalClose = () => {
        setModalOpen(false);
    }
    const handleAddProject = async () => {
        setLoading(true);
        if (projectTitle === '' || projectCode === '' || deadline == null) {
            setErrorMsg('*Some or all fields Missing*');
            setLoading(false);
        }
        else {
            const { message } = await addProject({ projectTitle, projectCode, deadline });
            if (message === 'Success') {
                setLoading(false);
                setModalOpen(false);
                window.location.reload();
            }
        }
    }
    const handleLogin = () => {
        router.push('/login');
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            {loginverification ?
                <div className="modal-box w-10/12 max-w-xl">
                    <div className='flex flex-col p-5 rounded mt-5 '>
                        <h1 className='font-bold text-center'>Please login add new Project</h1>
                        <div className="flex flex-row">
                            <button className='btn btn-accent text-white w-20 mx-auto mt-10 font-bold' onClick={handleLogin}>Login</button>
                            <button className='btn btn-error text-white w-20 mx-auto mt-10 font-bold' onClick={handleModalClose}>Cancel</button>
                        </div>
                    </div>
                </div> :
                <div className="modal-box w-10/12 max-w-5xl">
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
                            placeholder="Add unique project code"
                            required
                        />
                        <label htmlFor="deadline" className="block text-black mb-2 my-5">Deadline</label>
                        <label className="input input-bordered flex items-center gap-2 my-1">
                            <input type="date" className="grow" placeholder="Deadline" name="deadline" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                        </label>
                    </div>
                    <h1 className="font-bold text-error text-xs mt-3">{errorMsg}</h1>
                    <button className="btn btn-accent mt-2 text-white font-bold" onClick={handleAddProject}>Add Project<AiOutlinePlus />{loading && <span className="loading loading-dots loading-md"></span>}</button>
                </div>
            }
        </dialog>
    )
}

export default AddProjectModal