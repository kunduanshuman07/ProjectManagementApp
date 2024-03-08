'use client'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { useState } from "react";
import AddTaskDialog from "./AddTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import DetailsModal from "./DetailsModal";
interface GridTableProps {
    tasks: any[] | null
}

const GridTable: React.FC<GridTableProps> = ({ tasks }) => {
    const [editModalOpen, setEditModalOpen] = useState<any>(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState<any>(false)
    const [detailsModal, setDetailsModal] = useState<any>(false);
    const [detailsTask, setDetailsTask] = useState<any>();
    const [taskId, setTaskId] = useState<any>();
    const handleDetails = (task: any) => {
        console.log(task);
        setDetailsTask(task);
        setDeleteModalOpen(true);
    }
    const handleEdit = (taskId: any) => {
        setTaskId(taskId);
        setEditModalOpen(true);
    }
    const handleDelete = (taskId: any) => {
        setDeleteModalOpen(true);
    }
    return (
        <div className="overflow-x-auto  p-10">
            <table className="table">
                <thead>
                    <tr>
                        <th className="font-bold">
                            <input type="checkbox" className="checkbox"></input>
                        </th>
                        <th className="font-bold">Tasks</th>
                        <th className="font-bold">Assignee</th>
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
                            <td>
                                <input type="checkbox" className="checkbox"></input>
                            </td>
                            <td className="font-bold">
                                {task.task}
                            </td>
                            <td>{task.assignee}</td>
                            <td>
                                <button className={`btn btn-xs ${task.priority === 'High' ? 'btn-error' : task.priority === 'Low' ? 'btn-accent' : 'btn-warning'}`}>{task.priority}</button>
                            </td>
                            <td>{task.deadline}</td>
                            <td><button className={`btn btn-xs ${task.status === 'In Progress' ? 'btn-info text-white' : 'btn-success text-white'}`}>{task.status}</button></td>
                            <td>
                                <button className="btn btn-xs" onClick={() => handleDetails(task)}><MdOutlineDescription /></button>
                            </td>
                            <td>
                                <button className="btn btn-xs" onClick={() => handleEdit(task.id)}><FaEdit /></button>
                            </td>
                            <td>
                                <button className="btn btn-xs" onClick={() => handleDelete(task.id)}><MdDelete /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editModalOpen && <AddTaskDialog setModalOpen={setEditModalOpen} modalOpen={editModalOpen} callType="Edit" taskId={taskId} />}
            {deleteModalOpen && <DeleteTaskDialog setModalOpen={setDeleteModalOpen} modalOpen={deleteModalOpen} taskId={taskId} />}
            {detailsModal && <DetailsModal setModalOpen={setDetailsModal} modalOpen={detailsModal} task={detailsTask} />}
        </div>
    )
}

export default GridTable
