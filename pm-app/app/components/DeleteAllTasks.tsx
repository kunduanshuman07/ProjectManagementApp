import { deleteTask } from "../server-actions/deleteTask";
import { useState } from "react";
interface DeleteTaskDialogProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    handleDeleteAllTasks: () => void;
}

const DeleteAllTaskDialog: React.FC<DeleteTaskDialogProps> = ({ modalOpen, setModalOpen, handleDeleteAllTasks }) => {
    const handleDeleteTask = async () => {
        setModalOpen(false);
        handleDeleteAllTasks();
        
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-xl">
                <h1 className="text-center font-bold mt-5">Are you sure you want to delete selected Tasks?</h1>
                <div className="flex flex-row">
                    <button className="btn btn-error mt-10 text-white" onClick={handleDeleteTask}>
                        Delete
                    </button>
                    <button className="btn btn-neutral mt-10 ml-auto" onClick={handleModalClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default DeleteAllTaskDialog;
