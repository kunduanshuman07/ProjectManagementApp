'use client'
import { useRouter } from 'next/navigation'
import { CgProfile } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";

const Drawer = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/login');
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">
                    <FaProjectDiagram/>
                    Project Management App
                </a>
            </div>
            <div className="navbar-center">
                <button className="btn btn-outline btn-info">Project #144</button>
            </div>
            <div className="navbar-end" data-tip="Profile" >
                <div className="tooltip tooltip-bottom" data-tip="Profile">
                    <button className="btn text-xl p-4 btn-secondary btn-circle" onClick={handleLogin}><CgProfile /></button>
                </div>
            </div>

        </div>
    )
}

export default Drawer