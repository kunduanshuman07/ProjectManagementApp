
const ModalFields = () => {
    return (
        <div className="p-5">
            <label className="input input-bordered flex items-center gap-2 my-5">
                <input type="text" className="grow" placeholder="Task Name" />
            </label>
            <select className="select select-bordered w-full max-w-xs mr-10">
                <option disabled selected>Assignee?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Priority</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            
            <label className="input input-bordered flex items-center gap-2 my-5">
                <input type="date" className="grow" placeholder="Deadline" />
            </label>
        </div>
    )
}

export default ModalFields