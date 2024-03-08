'use client'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { useState } from "react";
import AddTaskDialog from "./AddTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
interface GridTableProps {
    tasks: any[] | null
}

const GridTable: React.FC<GridTableProps> = ({ tasks }) => {
    const [editModalOpen, setEditModalOpen] = useState<any>(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState<any>(false)
    const [taskId, setTaskId] = useState<any>();
    const handleEdit = (taskId: any) => {
        setTaskId(taskId);
        setEditModalOpen(true);
    }
    const handleDelete = () => {
        setDeleteModalOpen(true);
    }
    return (
        <div className="overflow-x-auto  p-10">
            <table className="table">
                <thead>
                    <tr>
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
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">{task.task}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{task.assignee}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">{task.priority}</button>
                            </td>
                            <td>{task.deadline}</td>
                            <td><button className="btn btn-primary btn-xs">{task.status}</button></td>
                            <td>
                                <button className="btn btn-xs"><MdOutlineDescription /></button>
                            </td>
                            <td>
                                <button className="btn btn-xs" onClick={()=>handleEdit(task.id)}><FaEdit /></button>
                            </td>
                            <td>
                                <button className="btn btn-xs" onClick={handleDelete}><MdDelete /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editModalOpen&&<AddTaskDialog setModalOpen={setEditModalOpen} modalOpen={editModalOpen} callType="Edit" taskId={taskId}/>}
            {deleteModalOpen&&<DeleteTaskDialog setModalOpen={setDeleteModalOpen} modalOpen={deleteModalOpen} taskId={taskId}/>}
        </div>
    )
}

export default GridTable
