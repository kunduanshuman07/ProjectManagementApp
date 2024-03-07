
import { AiOutlinePlus } from "react-icons/ai";

interface ProjectHeaderProps{
    setModalOpen: (modalOpen: boolean) => void;
}
const ProjectHeader:React.FC<ProjectHeaderProps> = ({setModalOpen}) => {
    const handleModalClick = () => {
        setModalOpen(true);
    }
    return (
        <div>
            <button className="btn btn-neutral ml-10 mt-10" onClick={handleModalClick}>Add new task <AiOutlinePlus /></button>
        </div>
    )
}

export default ProjectHeader