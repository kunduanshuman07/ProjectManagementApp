import { AiOutlinePlus } from "react-icons/ai";
import { addTask } from "../server-actions/addTask";
const ModalFields = () => {
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
                    <select className="select select-bordered w-full max-w-xs mr-10 ml-5 mt-3" id="assignee" name="assignee">
                        <option>Anshuman Kundu</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <label htmlFor="priority" className="block text-black mb-2 my-6">Priority</label>
                    <select className="select select-bordered w-full max-w-xs ml-5 mt-3" id="priority" name="priority">
                        <option>Ayushi Srivastava</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <label htmlFor="deadline" className="block text-black mb-2 my-5">Deadline</label>
                <label className="input input-bordered flex items-center gap-2 my-1">
                    <input type="date" className="grow" placeholder="Deadline" name="deadline" id="deadline" />
                </label>
            </div>
            <button className="btn btn-accent mt-5" type="submit">Add Task<AiOutlinePlus /></button>
        </form>
    )
}

export default ModalFields