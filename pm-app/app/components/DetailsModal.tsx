import { MdOutlineDescription } from "react-icons/md";

interface DetailsModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    task: any;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ modalOpen, setModalOpen, task }) => {
    const handleModalClose = () => {
        setModalOpen(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-2xl p-8">
                <h1 className="font-bold text-center underline mt-2 mb-2">Task Details</h1>
                <button className="btn text-left font-bold mt-5 flex flex-row"><MdOutlineDescription />{task.task}</button>
                <div className="flex flex-row">
                    <h1 className="mt-5 font-bold text-10">Priority: </h1>
                    <button className={`btn btn-xs mt-5 ml-2 text-white ${task.priority === 'High' ? 'btn-error' : task.priority === 'Low' ? 'btn-accent' : 'btn-warning'}`}>{task.priority}</button>
                </div>
                <div>
                    <h1 className="mt-5 font-bold">Description:</h1>
                    <p className="text-left mt-2">{task.task_description}</p>
                </div>
                <div className="flex flex-row">
                    <h1 className="mt-5 font-bold text-10">Status: </h1>
                    <button className={`btn btn-xs mt-5 ml-2 ${task.status === 'In Progress' ? 'btn-info text-white' : 'btn-success text-white'}`}>{task.status}</button>
                </div>
                <div className="flex flex-row">
                    <h1 className="mt-5 font-bold text-10">Deadline: </h1>
                    <button className="btn btn-xs mt-5 ml-2">{task.deadline}</button>
                </div>
                <div className="flex flex-row">
                    <h1 className="mt-5 font-bold text-10">Assigned to: </h1>
                    <button className="btn btn-xs mt-5 ml-2">{task.assignee}</button>
                </div>
                <div className="flex flex-row">
                    <button className="btn btn-neutral mt-10 ml-auto" onClick={handleModalClose}>Close</button>
                </div>
            </div>
        </dialog>
    )
}

export default DetailsModal