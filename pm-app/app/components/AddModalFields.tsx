import { AiOutlinePlus } from "react-icons/ai";
import { addTask } from "../server-actions/addTask";
interface AddModalProps {
    setModalOpen: (modalOpen: boolean) => void;
    users: any[]|null;
}
const AddModalFields:React.FC<AddModalProps> = ({setModalOpen, users}) => {
    const handleAddTask=() => {
        setModalOpen(false);
    }
    return (
        <form action={addTask}>
            <div className="p-2">
                <label htmlFor="task" className="block text-black mb-2 my-5">Task Name</label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    className="grow border border-gray-600 rounded py-2 px-3 w-full"
                    placeholder="Task Name"
                    required
                />
                <label htmlFor="task_description" className="block text-black mb-2 my-5">Task Description</label>
                <input
                    type="text"
                    id="task_description"
                    name="task_description"
                    className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                    placeholder="Task Description"
                    required
                />
                <div className="flex flex-row">
                    <label htmlFor="assignee" className="block text-black mb-2 my-6">Assignee</label>
                    <select className="select select-bordered w-full max-w-xs mr-2 ml-2 mt-3" id="assignee" name="assignee">
                        {users?.map((user)=>(
                            <option key={user.id} value={`${user.id}|${user.name}`}>{user.name}</option>
                        ))}
                    </select>
                    <label htmlFor="priority" className="block text-black mb-2 my-6 ml-2">Priority</label>
                    <select className="select select-bordered w-full max-w-xs ml-2 mt-3" id="priority" name="priority">
                        <option>High</option>
                        <option>Med</option>
                        <option>Low</option>
                    </select>
                    <label htmlFor="status" className="block text-black mb-2 my-6 ml-2">Status</label>
                    <select className="select select-bordered w-full max-w-xs ml-2 mt-3" id="status" name="status">
                        <option>In Progress</option>
                        <option>Done</option>
                    </select>
                </div>
                <label htmlFor="deadline" className="block text-black mb-2 my-5">Deadline</label>
                <label className="input input-bordered flex items-center gap-2 my-1">
                    <input type="date" className="grow" placeholder="Deadline" name="deadline" id="deadline" />
                </label>
            </div>
            <button className="btn btn-accent mt-5" type="submit" onClick={handleAddTask}>Add Task<AiOutlinePlus /></button>
        </form>
    )
}

export default AddModalFields