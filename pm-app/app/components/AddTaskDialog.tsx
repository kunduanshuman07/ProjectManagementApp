import ModalFields from "./ModalFields";
interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
}

const AddTaskDialog: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
    const handleModalClose = () => {
        setModalOpen(false);
    }
    console.log(modalOpen);
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-5xl">
                <div className='flex flex-row'>
                    <button className="btn btn-outline btn-success text-white font-bold no-animation">Add New Task to the Project</button>
                    <button className="btn ml-auto" onClick={handleModalClose}>Close</button>
                </div>
                <ModalFields />
            </div>
        </dialog>
    )
}

export default AddTaskDialog