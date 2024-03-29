'use client'
import { useRouter } from 'next/navigation'
import { FaProjectDiagram } from "react-icons/fa";
import { signOut } from 'next-auth/react';
const Drawer = () => {
    const router = useRouter();
    const handleProfile = () => {
        router.push('/profile');
    }
    const handleLogout = async() => {
        await signOut({
            redirect: false
        });
        router.push('/login');
    }
    const handleDashboard = () => {
        router.push('/');
    }
    const handleTasks = () => {
        router.push('/projects');
    }
    return (
        <div className="navbar bg-base-100 bg-neutral text-white">
            <div className="navbar-start">
                <details className="dropdown">
                    <summary className="btn btn-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-neutral">
                        <li onClick={handleDashboard}><a>Dashboard</a></li>
                        <li onClick={handleTasks}><a>Tasks</a></li>
                        <li onClick={handleProfile}><a>Profile</a></li>
                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                </details>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost text-xl ml-0"><FaProjectDiagram />Project Management App</a>
            </div>
        </div>
    )
}

export default Drawer