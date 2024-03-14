import { AiOutlinePlus } from "react-icons/ai";
import { addTask } from "../server-actions/addTask";
import { useState } from "react";
interface AddModalProps {
    setModalOpen: (modalOpen: boolean) => void;
    users: any[] | null;
}
const AddModalFields: React.FC<AddModalProps> = ({ setModalOpen, users }) => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const [task, setTask] = useState<string>('');
    const [task_description, setTask_desc] = useState<string>('');
    const [assignee, setAssignee] = useState<string>('');
    const [priority, setPriority] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [deadline, setDeadline] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const handleAddTask = async () => {
        setLoading(true);
        const {message} = await addTask({task, task_description, assignee, priority, status, deadline})
        if(message==='Success'){
            setLoading(false);
            setModalOpen(false);
            window.location.reload();
        }
    }
    return (
        <>
            <div className="p-1">
                <label htmlFor="task" className="block text-black mb-2 my-5">Task Name</label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="grow border border-gray-600 rounded py-2 px-3 w-full"
                    placeholder="Task Name"
                    required
                />
                <label htmlFor="task_description" className="block text-black mb-2 my-5">Task Description</label>
                <input
                    type="text"
                    id="task_description"
                    name="task_description"
                    value={task_description}
                    onChange={(e) => setTask_desc(e.target.value)}
                    className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                    placeholder="Task Description"
                    required
                />
                <div className={`flex ${screenWidth<1000? "flex-col": "flex-row"}`}>
                    <label htmlFor="assignee" className="block text-black mb-2 my-6">Assignee</label>
                    <select
                        className="select select-bordered w-full max-w-xs mr-2 ml-2 mt-3"
                        id="assignee"
                        name="assignee"
                        value={assignee}
                        onChange={(e) => setAssignee(e.target.value)}
                    >
                        <option value="">Select Assignee</option>
                        {users?.map((user) => (
                            <option key={user.id} value={`${user.id}|${user.name}`}>
                                {user.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="priority" className="block text-black mb-2 my-6 ml-2">Priority</label>
                    <select className="select select-bordered w-full max-w-xs ml-2 mt-3" id="priority" name="priority"
                         value={priority}
                         onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="">Select Priority</option>
                        <option>High</option>
                        <option>Med</option>
                        <option>Low</option>
                    </select>

                    <label htmlFor="status" className="block text-black mb-2 my-6 ml-2">Status</label>
                    <select className="select select-bordered w-full max-w-xs ml-2 mt-3" id="status" name="status"
                         value={status}
                         onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Select Status</option>
                        <option>In Progress</option>
                        <option>Done</option>
                    </select>
                </div>
                <label htmlFor="deadline" className="block text-black mb-2 my-5">Deadline</label>
                <label className="input input-bordered flex items-center gap-2 my-1">
                    <input type="date" className="grow" placeholder="Deadline" name="deadline" id="deadline" value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
                </label>
            </div>
            <button className="btn btn-accent mt-5 text-white font-bold" onClick={handleAddTask}>Add Task<AiOutlinePlus />{loading&&<span className="loading loading-dots loading-md"></span>}</button>
        </>
    )
}

export default AddModalFields