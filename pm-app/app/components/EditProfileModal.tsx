import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { editUserProfile } from "../server-actions/editUserProfile";
interface EditProfileProps {
    setModalOpen: (modalOpen: boolean) => void;
    user: any;
}
const EditProfileModal: React.FC<EditProfileProps> = ({ setModalOpen, user }) => {
  const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const [name, setName] = useState<string>(user?.name);
    const [dob, setDob] = useState<any>(user?.dob);
    const [gender, setGender] = useState<string>(user?.gender);
    const [phone, setPhone] = useState<string>(user?.phone);
    const [city, setCity] = useState<string>(user?.city);
    const [state, setState] = useState<string>(user?.state);
    const [nation, setNation] = useState<string>(user?.nation);
    const [tenth, setTenth] = useState<any>(user?.tenth);
    const [twelth, setTwelth] = useState<any>(user?.twelth);
    const [graduation, setGraduation] = useState<any>(user?.graduation);
    const [loading, setLoading] = useState<boolean>(false);
    const handleEditProfile = async () => {
        setLoading(true);
        const { message , userData } = await editUserProfile({ name, dob, phone, gender, city, state, nation, tenth, twelth, graduation, userId: user?.id });
        if (message === 'Success'&&userData&&userData.length>0) {
            setLoading(false);
        }
        window.location.reload();
        setModalOpen(false);
    }
    return (
        <>
            <div className="p-2">
                <label htmlFor="email" className="block text-black mb-2 my-5">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="grow border border-gray-600 rounded py-2 px-3 w-full"
                    placeholder="Name"
                    required
                />
                <div className={`flex ${screenWidth<1000?'flex-col':'flex-row'}`}>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="block text-black mb-2 my-5">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mt-2 mb-1"
                            placeholder="Phone"
                            required
                        />
                    </div>
                    <div className={`flex flex-col ${screenWidth<1000?'':'ml-4'}`}>
                        <label htmlFor="gender" className="block text-black mb-2 my-5">Gender</label>
                        <select className="select select-bordered w-full max-w-xs my-1" id="gender" name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className={`flex flex-col ${screenWidth<1000?'':'ml-4'}`}>
                        <label htmlFor="dob" className="block text-black mb-2 my-5">Date of Birth</label>
                        <label className="input input-bordered flex items-center gap-2 my-1">
                            <input type="date" className="grow" placeholder="DOB" name="dob" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </label>
                    </div>
                </div>
                <div className={`flex mt-2 ${screenWidth<1000?'flex-col':'flex-row'}`}>
                    <div className="flex flex-col">
                        <label htmlFor="tenth" className="block text-black mb-2 my-5">Class 10th (on a scale of 100)</label>
                        <input
                            type="text"
                            id="tenth"
                            name="tenth"
                            value={tenth}
                            onChange={(e) => setTenth(e.target.value)}
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="Class 10th marks"
                            required
                        />
                    </div>
                    <div className={`flex flex-col ${screenWidth<1000?'':'ml-4'}`}>
                        <label htmlFor="twelth" className="block text-black mb-2 my-5">Class 12th (on a scale of 100)</label>
                        <input
                            type="text"
                            id="twelth"
                            name="twelth"
                            value={twelth}
                            onChange={(e) => setTwelth(e.target.value)}
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="Class 12th marks"
                            required
                        />
                    </div>
                    <div className={`flex flex-col ${screenWidth<1000?'':'ml-4'}`}>
                        <label htmlFor="graduation" className="block text-black mb-2 my-5">Graduation (on a scale of 10)</label>
                        <input
                            type="text"
                            id="graduation"
                            name="graduation"
                            value={graduation}
                            onChange={(e) => setGraduation(e.target.value)}
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="Graduation marks"
                            required
                        />
                    </div>
                </div>
                <div className={`flex ${screenWidth<1000?'flex-col':'flex-row'}`}>
                    <div className="flex flex-col">
                        <label htmlFor="city" className="block text-black mb-2 my-5">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="City"
                            required
                        />
                    </div>
                    <div className={`flex flex-col ${screenWidth<1000?'':'ml-4'}`}>
                        <label htmlFor="state" className="block text-black mb-2 my-5">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="State"
                            required
                        />
                    </div>
                    <div className={`flex flex-col ${screenWidth<1000?'':'ml-4'}`}>
                        <label htmlFor="nation" className="block text-black mb-2 my-5">Nationality</label>
                        <input
                            type="text"
                            id="nation"
                            name="nation"
                            value={nation}
                            onChange={(e) => setNation(e.target.value)}
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="Nationality"
                            required
                        />
                    </div>
                </div>
            </div>
            <button className="btn btn-accent mt-5 font-bold text-white ml-2" onClick={handleEditProfile}>Update Profile<AiOutlineEdit />{loading && <span className="loading loading-dots loading-md"></span>}</button>
        </>
    )
}

export default EditProfileModal