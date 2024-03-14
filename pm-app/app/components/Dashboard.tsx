import React, { useEffect, useState } from 'react'
import ProjectTable from './ProjectTable'
import { AiOutlinePlus } from 'react-icons/ai'
import AddProjectModal from './AddProjectModal';
import { FaEye } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import { fetchDashboardData } from '../server-actions/fetchDashboardData';
const Dashboard = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [dashboardData, setDashboardData] = useState<any>();
    useEffect(() => {
        const fetchDashboard = async () => {
            setLoading(true);
            const data = await fetchDashboardData();
            setDashboardData(data);
            console.log(data);
            setLoading(false);
        }
        fetchDashboard();
    }, []);
    useEffect(()=>{

    },[])
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const router = useRouter();
    const handleViewTasks = () => {
        router.push('/projects');
    }
    
    return (
        <div className='flex flex-col'>
            {loading ?
                <>
                    <div className='flex flex-col m-auto p-10 rounded mt-20'>
                        <h1 className='font-bold text-accent'>Loading Data ...</h1>
                        <span className='loading loading-bars text-center mt-5 mx-auto text-accent'></span>
                    </div>
                </>
                :
                <>
                    <div className='pb-10 bg-neutral'>
                        <h1 className='mt-5 ml-10 font-bold bg-accent text-white w-60 p-3 rounded text-center'>Dashboard Analytics</h1>
                        <div className='flex flex -row mt-5 ml-10'>
                            <div className="stats shadow">
                                <div className="stat place-items-center">
                                    <div className="stat-title">Projects</div>
                                    <div className="stat-value mt-3">{loading ? <span className="loading loading-dots loading-md"></span> : dashboardData.ProjectsCount} </div>
                                </div>
                            </div>
                            <div className="stats shadow ml-5">
                                <div className="stat place-items-center">
                                    <div className="stat-title font-bold">Users</div>
                                    <div className="mt-3 stat-value text-info">{loading ? <span className="loading loading-dots loading-md"></span> : dashboardData.UsersCount} </div>
                                </div>
                            </div>
                            <div className="stats shadow ml-5">
                                <div className="stat place-items-center">
                                    <div className="stat-title font-bold">Tasks</div>
                                    <div className="stat-value mt-3">{loading ? <span className="loading loading-dots loading-md"></span> : dashboardData.TasksCount} </div>
                                </div>
                                <div className="stat place-items-center">
                                    <div className="stat-title font-bold">In Progress</div>
                                    <div className="stat-value mt-3 text-primary">{loading ? <span className="loading loading-dots loading-md"></span> : dashboardData.IpCount} </div>
                                </div>
                            </div>
                            <div className="stats shadow ml-5">
                                <div className="stat place-items-center">
                                    <div className="stat-title font-bold">High Priority</div>
                                    <div className="stat-value mt-3 text-error">{loading ? <span className="loading loading-dots loading-md"></span> : dashboardData.HighCount} </div>
                                </div>
                            </div>
                            <div className="stats shadow ml-5">
                                <div className="stat place-items-center">
                                    <div className="stat-title font-bold">Closest Project</div>
                                    <div className="mt-3 font-bold text-info">{loading ? <span className="loading loading-dots loading-md"></span> : dashboardData.ClosestProject?.project_title} </div>
                                    <div className="stat-desc mt-3 text-neutral font-bold">{loading ? <span className="loading loading-dots loading-md"></span> : `Deadline: ${dashboardData.ClosestProject?dashboardData.ClosestProject.deadline: ''}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-5'>
                        <button className='btn mt-5 ml-10' onClick={() => setModalOpen(true)}>Add New Project <AiOutlinePlus /></button>
                        <button className='btn mt-5 ml-10 btn-neutral' onClick={handleViewTasks}>View All Tasks <FaEye /></button>
                    </div>
                    <ProjectTable />
                    {modalOpen && <AddProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
                </>}
        </div>
    )
}

export default Dashboard