'use client'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { useEffect, useState } from "react";
import AddTaskDialog from "./AddTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import DetailsModal from "./DetailsModal";
import { fetchTasks } from "../server-actions/fetchTasks";
import { fetchUsers } from "../server-actions/fetchUsers";

interface GridTableProps{
    headerTab: string;
}

const GridTable:React.FC<GridTableProps> = ({headerTab}) => {
    const [users, setUsers] = useState<any>([]);
    const [tasks, setTasks] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchTasksandUsers = async () => {
            setLoading(true);
            const { allTasks } = await fetchTasks({tabState:headerTab});
            const { data } = await fetchUsers();
            setTasks(allTasks);
            setUsers(data);
            setLoading(false);
        }
        fetchTasksandUsers();
    }, [headerTab])
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
        <div className="overflow-x-auto  p-10">
            {loading ?
                <>
                    <div className="flex flex-row">
                        <span className="loading loading-infinity loading-lg ml-auto mr-5 text-accent"></span>
                        <h2 className="font-bold text-2xl mt-1">Loading Tasks</h2>
                        <span className="loading loading-infinity loading-lg text-center ml-5 mr-auto text-accent"></span>
                    </div>
                </> :
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
                                    <button className={`btn btn-xs text-white ${task.priority === 'High' ? 'btn-error' : task.priority === 'Low' ? 'btn-accent' : 'btn-warning'}`}>{task.priority}</button>
                                </td>
                                <td>{task.deadline}</td>
                                <td><button className={`btn btn-xs ${task.status === 'In Progress' ? 'btn-info text-white' : 'btn-success text-white'}`}>{task.status}</button></td>
                                <td>
                                    <button className="btn btn-xs" onClick={() => handleDetails(task)}><MdOutlineDescription /></button>
                                </td>
                                <td>
                                    <button className="btn btn-xs" onClick={() => handleEdit(task.id, task)}><FaEdit /></button>
                                </td>
                                <td>
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
