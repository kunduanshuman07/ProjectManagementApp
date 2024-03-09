'use client'
import { useRouter } from 'next/navigation'
import { FaProjectDiagram } from "react-icons/fa";

const Drawer = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/profile');
    }
    return (
        <div className="navbar bg-base-100 bg-neutral text-white">
            <div className="navbar-start">
                <details className="dropdown">
                    <summary className="m-1 btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-neutral">
                        <li><a>Dashboard</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Tasks</a></li>
                    </ul>
                </details>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl"><FaProjectDiagram />Project Management App - EasySLR</a>
            </div>
            <div className="navbar-end avatar placeholder">
                <details className="dropdown dropdown-bottom dropdown-end">
                    <summary className="btn btn-circle">
                        A
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-neutral">
                        <li onClick={handleLogin}><a>Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </details>

            </div>
        </div>
    )
}

export default Drawer