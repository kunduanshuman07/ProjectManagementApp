
import { CgProfile } from "react-icons/cg";

const Drawer = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Project Management App</a>
            </div>
            <div className="navbar-center">
                <button className="btn btn-outline btn-info">Project #144</button>
            </div>
            <div className="navbar-end">
                <button className="btn text-xl p-4 btn-accent"><CgProfile /></button>
            </div>

        </div>
    )
}

export default Drawer