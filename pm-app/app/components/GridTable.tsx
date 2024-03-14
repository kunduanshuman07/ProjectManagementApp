'use client'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { useState } from "react";
import AddTaskDialog from "./AddTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import DetailsModal from "./DetailsModal";

interface GridTableProps{
    tasks: any;
    users: any;
    loading: boolean;
}

const GridTable: React.FC<GridTableProps> = ({tasks, users, loading}) => {
    const [editModalOpen, setEditModalOpen] = useState<any>(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState<any>(false)
    const [detailsModal, setDetailsModal] = useState<any>(false);
    const [detailsTask, setDetailsTask] = useState<any>();
    const [taskId, setTaskId] = useState<any>();
    const handleDetails = (task: any) => {
        setDetailsTask(task);
        setDetailsModal(true);
    }
    const handleEdit = (taskId: any, task: any) => {
        setTaskId(taskId);
        setDetailsTask(task);
        setEditModalOpen(true);
    }
    const handleDelete = (taskId: any) => {
        setTaskId(taskId);
        setDeleteModalOpen(true);
    }
    return (
        <div className="overflow-x-auto p-4">
            {loading ?
                <>
                    <div className="flex flex-row">
                        <span className="loading loading-bars loading-lg ml-auto mr-5 text-neutral"></span>
                        <h2 className="font-bold text-xl mt-1">Loading Tasks</h2>
                        <span className="loading loading-bars loading-lg text-center ml-5 mr-auto text-neutral"></span>
                    </div>
                </> :
                <table className="table border rounded">
                    <thead>
                        <tr>
                            <th className="font-bold">Tasks</th>
                            <th className="font-bold">Assigned To</th>
                            <th className="font-bold">Priority</th>
                            <th className="font-bold">Deadline</th>
                            <th className="font-bold">Status</th>
                            <th className="font-bold">Details</th>
                            <th className="font-bold">Edit</th>
                            <th className="font-bold">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks?.map((task: any) => (
                            <tr key={task.id}>
                                <td className="font-bold">
                                    {task.task}
                                </td>
                                <td>{task.assignee}</td>
                                <td>
                                    <button className={`btn btn-xs text-white ${task.priority === 'High' ? 'btn-error' : task.priority === 'Low' ? 'btn-accent' : 'btn-warning'}`}>{task.priority}</button>
                                </td>
                                <td>{task.deadline}</td>
                                <td><button className={`btn btn-xs ${task.status === 'In Progress' ? 'btn-info text-white' : 'btn-success text-white'}`}>{task.status}</button></td>
                                <td className="">
                                    <button className="btn btn-xs" onClick={() => handleDetails(task)}><MdOutlineDescription /></button>
                                </td>
                                <td className="">
                                    <button className="btn btn-xs" onClick={() => handleEdit(task.id, task)}><FaEdit /></button>
                                </td>
                                <td className="">
                                    <button className="btn btn-xs" onClick={() => handleDelete(task.id)}><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            {editModalOpen && <AddTaskDialog setModalOpen={setEditModalOpen} modalOpen={editModalOpen} callType="Edit" taskId={taskId} users={users} taskDetails={detailsTask} />}
            {deleteModalOpen && <DeleteTaskDialog setModalOpen={setDeleteModalOpen} modalOpen={deleteModalOpen} taskId={taskId} />}
            {detailsModal && <DetailsModal setModalOpen={setDetailsModal} modalOpen={detailsModal} task={detailsTask} />}
        </div>
    )
}

export default GridTable
