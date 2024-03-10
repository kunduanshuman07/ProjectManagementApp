import EditProfileModal from "./EditProfileModal";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
}

const EditProfile: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
    const handleModalClose = () => {
        setModalOpen(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ""}`}>
            <div className="modal-box w-11/12 max-w-5xl">
                <div className='flex flex-row'>
                    <button className="btn btn-outline btn-success text-white font-bold no-animation">
                        Edit Profile
                    </button>
                    <button className="btn ml-auto" onClick={handleModalClose}>Close</button>
                </div>
                <EditProfileModal setModalOpen={setModalOpen}/>
            </div>
        </dialog>
    )
}

export default EditProfile