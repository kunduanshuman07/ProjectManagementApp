import { deleteTask } from "../server-actions/deleteTask";
interface DetailsModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    task: any;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ modalOpen, setModalOpen, task}) => {
    const handleModalClose = () => {
        setModalOpen(false);
    }
    console.log(modalOpen);
    return (
        <form action={deleteTask}>
            <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
                <div className="modal-box w-11/12 max-w-xl">
                    <h1 className="text-center font-bold mt-5">Are you sure you want to delete the Task?</h1>
                    <div className="flex flex-row">
                        <button className="btn btn-error mt-10 text-white" type="submit" onClick={handleModalClose}>Delete</button>
                        <button className="btn btn-neutral mt-10 ml-auto" onClick={handleModalClose}>Cancel</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}

export default DetailsModal