import { useState } from "react";
import { deleteTask } from "../server-actions/deleteTask";

interface FilterDialogProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    setFilterValues: (filterValues: any) => void;
    users: any[]|null;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ modalOpen, setModalOpen, setFilterValues, users }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [statusFilter, setStatusFilter] = useState<string>("All");
    const [priorityFilter, setPriorityFilter] = useState<string>("All");
    const [assigneeFilter, setAssigneeFilter] = useState<string>("");
    const [deadlineFrom, setDeadlineFrom] = useState<string>("");
    const [deadlineTo, setDeadlineTo] = useState<string>("");

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSetFilters = () => {
        setFilterValues({statusFilter, priorityFilter, assigneeFilter, deadlineFrom, deadlineTo});
        handleModalClose();
    };

    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-xl">
                <div className="flex flex-row">
                    <h1 className="font-bold mt-1">Add Task Filters</h1>
                    <button className="btn ml-auto btn-sm" onClick={handleModalClose}>Close</button>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h3 className="font-bold mt-3 text-secondary">Status</h3>
                        <div className="mt-3 flex flex-row">
                            <input
                                type="radio"
                                name="statusFilter"
                                className="radio radio-secondary"
                                value="All"
                                checked={statusFilter === "All"}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            />
                            <h2 className="ml-3">All</h2>
                        </div>
                        <div className="mt-3 flex flex-row">
                            <input
                                type="radio"
                                name="statusFilter"
                                className="radio radio-secondary"
                                value="In Progress"
                                checked={statusFilter === "In Progress"}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            />
                            <h2 className="ml-3">In Progress</h2>
                        </div>
                        <div className="mt-3 flex flex-row">
                            <input
                                type="radio"
                                name="statusFilter"
                                className="radio radio-secondary"
                                value="Completed"
                                checked={statusFilter === "Completed"}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            />
                            <h2 className="ml-3">Completed</h2>
                        </div>
                    </div>
                    <div className="flex flex-col ml-40">
                        <h3 className="font-bold mt-5 text-accent">Priority</h3>
                        <div className="mt-3 flex flex-row">
                            <input
                                type="radio"
                                name="priorityFilter"
                                className="radio radio-accent"
                                value="All"
                                checked={priorityFilter === "All"}
                                onChange={(e) => setPriorityFilter(e.target.value)}
                            />
                            <h2 className="ml-3">All</h2>
                        </div>
                        <div className="mt-3 flex flex-row">
                            <input
                                type="radio"
                                name="priorityFilter"
                                className="radio radio-accent"
                                value="High"
                                checked={priorityFilter === "High"}
                                onChange={(e) => setPriorityFilter(e.target.value)}
                            />
                            <h2 className="ml-3">High</h2>
                        </div>
                        <div className="mt-3 flex flex-row">
                            <input
                                type="radio"
                                name="priorityFilter"
                                className="radio radio-accent"
                                value="Medium"
                                checked={priorityFilter === "Medium"}
                                onChange={(e) => setPriorityFilter(e.target.value)}
                            />
                            <h2 className="ml-3">Medium</h2>
                        </div>
                        <div className="mt-3 flex flex-row">
                            <input
                                type="radio"
                                name="priorityFilter"
                                className="radio radio-accent"
                                value="Low"
                                checked={priorityFilter === "Low"}
                                onChange={(e) => setPriorityFilter(e.target.value)}
                            />
                            <h2 className="ml-3">Low</h2>
                        </div>
                    </div>
                </div>
                <h3 className="font-bold mt-5 text-info">Assigned To</h3>
                <select
                    className="select select-bordered select-sm select-info max-w-xs mr-2 mt-3"
                    id="assignee"
                    name="assignee"
                    value={assigneeFilter}
                    onChange={(e) => setAssigneeFilter(e.target.value)}
                >
                    <option value="">Select Assignee</option>
                        {users?.map((user) => (
                            <option key={user.id} value={`${user.id}|${user.name}`}>
                                {user.name}
                            </option>
                        ))}
                </select>
                <h3 className="font-bold mt-5 text-primary">Deadline</h3>
                <div className="flex flex-row mt-3">
                    <h1 className="text-xm">From</h1>
                    <input
                        type="date"
                        className="input input-xs input-primary ml-2"
                        value={deadlineFrom}
                        onChange={(e) => setDeadlineFrom(e.target.value)}
                    />
                    <h1 className="text-xm ml-5">To</h1>
                    <input
                        type="date"
                        className="input input-xs input-primary ml-2"
                        value={deadlineTo}
                        onChange={(e) => setDeadlineTo(e.target.value)}
                    />
                </div>
                <button className="btn btn-neutral btn-sm mt-5" onClick={handleSetFilters}>
                    Set Filters
                </button>
            </div>
        </dialog>
    );
};

export default FilterDialog;
