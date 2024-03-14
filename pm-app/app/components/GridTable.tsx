'use client'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { useState } from "react";
import AddTaskDialog from "./AddTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import DetailsModal from "./DetailsModal";

interface GridTableProps {
    tasks: any;
    users: any;
    loading: boolean;
    loginVerification: boolean;
}

const GridTable: React.FC<GridTableProps> = ({ tasks, users, loading, loginVerification }) => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const [editModalOpen, setEditModalOpen] = useState<any>(false);
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
                <div className='flex flex-row rounded mt-20'>
                    <h1 className='font-bold ml-auto mr-5 text-accent'>Loading Tasks...</h1>
                    <span className='loading text-accent font-bold loading-bars text-center mr-auto'></span>
                </div>
                :
                screenWidth >= 1000 ? <table className="table border rounded">
                    <thead>
                        <tr>
                            <th className="font-bold">Task</th>
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
                </table> :
                    <div className="flex flex-col">
                        {tasks?.map((task: any) => (
                            <div className="p-5 shadow-md rounded mt-2" key={task.id}>
                                <h1 className="mt-3 font-bold text-primary text-xl">{task.task}</h1>
                                <h1 className="mt-3 text-neutral">Assigned To: {task.assignee}</h1>
                                <button className={`btn btn-xs text-white mt-3 ${task.priority === 'High' ? 'btn-error' : task.priority === 'Low' ? 'btn-accent' : 'btn-warning'}`}>Priority: {task.priority}</button>
                                <h1 className="mt-3 font-bold text-neutral">Deadline: {task.deadline}</h1>
                                <button className={`btn btn-xs mt-3 ${task.status === 'In Progress' ? 'btn-info text-white' : 'btn-success text-white'}`}>{task.status}</button>
                                <div className="flex flex-row mt-5">
                                    <button className="btn btn-xs btn-neutral" onClick={() => handleDetails(task)}>Details</button>
                                    <button className="btn btn-xs ml-5" onClick={() => handleEdit(task.id, task)}>Edit</button>
                                    <button className="btn btn-xs btn-error text-white ml-5" onClick={() => handleDelete(task.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
            }
            {editModalOpen && <AddTaskDialog setModalOpen={setEditModalOpen} modalOpen={editModalOpen} callType="Edit" taskId={taskId} users={users} taskDetails={detailsTask} loginVerification={loginVerification} />}
            {deleteModalOpen && <DeleteTaskDialog setModalOpen={setDeleteModalOpen} modalOpen={deleteModalOpen} taskId={taskId} />}
            {detailsModal && <DetailsModal setModalOpen={setDetailsModal} modalOpen={detailsModal} task={detailsTask} />}
        </div>
    )
}

export default GridTable
