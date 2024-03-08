import AddModalFields from "./AddModalFields";
import EditModalFields from "./EditModalFields";
interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    callType: string;
    taskId: any;
}

const AddTaskDialog: React.FC<ModalProps> = ({ modalOpen, setModalOpen, callType, taskId }) => {
    const handleModalClose = () => {
        setModalOpen(false);
    }
    console.log(modalOpen);
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-5xl">
                <div className='flex flex-row'>
                    <button className="btn btn-outline btn-success text-white font-bold no-animation">
                        {callType === "Edit"? "Edit Task": "Add New Task to the Project"}
                    </button>
                    <button className="btn ml-auto" onClick={handleModalClose}>Close</button>
                </div>
                {callType==='Add'&&<AddModalFields setModalOpen={setModalOpen}/>}
                {callType==='Edit'&&<EditModalFields setEditModalOpen={setModalOpen} taskId={taskId}/>}
            </div>
        </dialog>
    )
}

export default AddTaskDialog