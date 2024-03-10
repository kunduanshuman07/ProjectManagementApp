import React, { useState } from 'react'
import ProjectTable from './ProjectTable'
import { AiOutlinePlus } from 'react-icons/ai'
import AddProjectModal from './AddProjectModal';
const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <div className='flex flex-col'>
            <div className='pb-10 bg-neutral'>
                <h1 className='mt-5 ml-10 font-bold bg-accent text-white w-60 p-3 rounded text-center'>Dashboard Analytics</h1>
                <div className='flex flex -row mt-5 ml-10'>
                    <div className="stats shadow">
                        <div className="stat place-items-center">
                            <div className="stat-title">Projects</div>
                            <div className="stat-value mt-3">31</div>
                        </div>
                    </div>
                    <div className="stats shadow ml-5">
                        <div className="stat place-items-center">
                            <div className="stat-title font-bold">Tasks</div>
                            <div className="stat-value mt-3">31</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title font-bold">In Progress</div>
                            <div className="stat-value mt-3 text-primary">10</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title font-bold">Done</div>
                            <div className="stat-value mt-3 text-success">21</div>
                        </div>
                    </div>
                    <div className="stats shadow ml-5">
                        <div className="stat place-items-center">
                            <div className="stat-title font-bold">High Priority</div>
                            <div className="stat-value mt-3 text-error">10</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title font-bold">Medium Priority</div>
                            <div className="stat-value mt-3 text-warning">10</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-title font-bold">Low Priority</div>
                            <div className="stat-value mt-3 text-accent">11</div>
                        </div>
                    </div>
                    <div className="stats shadow ml-5">
                        <div className="stat place-items-center">
                            <div className="stat-title font-bold">Closest Project</div>
                            <div className="mt-3 font-bold text-info">BHNI</div>
                            <div className="stat-desc mt-3 text-neutral font-bold">Deadline 10th March</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mt-5 ml-5'>
                <h1 className='mt-5 ml-5 font-bold bg-warning text-white w-60 p-3 rounded text-center'>Project Details</h1>
                <button className='btn mt-5 ml-10' onClick={() => setModalOpen(true)}>Add New Project <AiOutlinePlus /></button>
            </div>
            <ProjectTable />
            {modalOpen && <AddProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
        </div>
    )
}

export default Dashboard