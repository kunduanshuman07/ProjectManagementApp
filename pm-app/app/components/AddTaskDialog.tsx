import AddModalFields from "./AddModalFields";
import EditModalFields from "./EditModalFields";
interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    callType: string;
    taskId: any;
    users: any[]|null;
}

const AddTaskDialog: React.FC<ModalProps> = ({ modalOpen, setModalOpen, callType, taskId, users }) => {
    const handleModalClose = () => {
        setModalOpen(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-5xl">
                <div className='flex flex-row'>
                    <button className="btn btn-outline btn-success text-white font-bold no-animation">
                        {callType === "Edit"? "Edit Task": "Add New Task to the Project"}
                    </button>
                    <button className="btn ml-auto" onClick={handleModalClose}>Close</button>
                </div>
                {callType==='Add'&&<AddModalFields setModalOpen={setModalOpen} users={users}/>}
                {callType==='Edit'&&<EditModalFields setModalOpen={setModalOpen} users={users} taskId={taskId}/>}
            </div>
        </dialog>
    )
}

export default AddTaskDialog