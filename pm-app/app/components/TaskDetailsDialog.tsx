interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
}

const TaskDetailsDialog: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
    const handleModalClose = () => {
        setModalOpen(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-5xl">
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-accent mr-10">Add New Task</button>
                        <button className="btn " onClick={handleModalClose}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default TaskDetailsDialog