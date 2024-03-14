import { useRouter } from "next/navigation";
import AddModalFields from "./AddModalFields";
import EditModalFields from "./EditModalFields";
interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    callType: string;
    taskId: any;
    users: any[] | null;
    taskDetails: any;
    loginVerification: boolean;
}

const AddTaskDialog: React.FC<ModalProps> = ({ modalOpen, setModalOpen, callType, taskId, users, taskDetails, loginVerification }) => {
    console.log(loginVerification);
    const router = useRouter();
    const handleModalClose = () => {
        setModalOpen(false);
    }
    const handleLogin = () => {
        router.push('/login');
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            {loginVerification ?
                <div className="modal-box w-11/12 max-w-xl">
                    <div className='flex flex-col p-5 rounded mt-5 '>
                        <h1 className='font-bold text-center'>Please login to Add or Edit Tasks</h1>
                        <div className="flex flex-row">
                            <button className='btn btn-accent text-white w-20 mx-auto mt-10 font-bold' onClick={handleLogin}>Login</button>
                            <button className='btn btn-error text-white w-20 mx-auto mt-10 font-bold' onClick={handleModalClose}>Cancel</button>
                        </div>
                    </div>
                </div> :
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='flex flex-row'>
                        <button className="btn btn-outline btn-success text-white font-bold no-animation">
                            {callType === "Edit" ? "Edit Task" : "Add New Task to the Project"}
                        </button>
                        <button className="btn ml-auto" onClick={handleModalClose}>Close</button>
                    </div>
                    {callType === 'Add' && <AddModalFields setModalOpen={setModalOpen} users={users} />}
                    {callType === 'Edit' && <EditModalFields setModalOpen={setModalOpen} users={users} taskId={taskId} taskDetails={taskDetails} />}
                </div>
            }
        </dialog>
    )
}

export default AddTaskDialog