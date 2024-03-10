import { deleteProject } from "../server-actions/deleteProject";
import { useState } from "react";
interface DeleteTaskDialogProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    projectId: any;
}

const DeleteProject: React.FC<DeleteTaskDialogProps> = ({ modalOpen, setModalOpen, projectId }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const handleDeleteTask = async () => {
        setLoading(true);
        const { message } = await deleteProject(projectId);
        if(message==='Success'){
            setLoading(false);
            setModalOpen(false);
            window.location.reload();
        }
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-xl">
                <h1 className="text-center font-bold mt-5">Are you sure you want to delete the Project?</h1>
                <div className="flex flex-row">
                    <button className="btn btn-error mt-10 text-white" onClick={handleDeleteTask}>
                        Delete {loading&&<span className="loading loading-dots loading-md"></span>}
                    </button>
                    <button className="btn btn-neutral mt-10 ml-auto" onClick={handleModalClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default DeleteProject;
