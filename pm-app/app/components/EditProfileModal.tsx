import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
interface EditProfileProps {
    setModalOpen: (modalOpen: boolean) => void;
}
const EditProfileModal: React.FC<EditProfileProps> = ({ setModalOpen }) => {
    const [email, setEmail] = useState<string>('');
    const [dob, setDob] = useState<any>();
    const [gender, setGender] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [nation, setNation] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleEditProfile = async () => {
        
    }
    return (
        <>
            <div className="p-2">
                <label htmlFor="email" className="block text-black mb-2 my-5">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="grow border border-gray-600 rounded py-2 px-3 w-full"
                    placeholder="Email"
                    required
                />
                <label htmlFor="phone" className="block text-black mb-2 my-5">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                    placeholder="Phone"
                    required
                />
                <div className="flex flex-row">
                    <label htmlFor="gender" className="block text-black mb-2 my-6 ml-2">Gender</label>
                    <select className="select select-bordered w-full max-w-xs ml-2 mt-3" id="gender" name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
                <label htmlFor="dob" className="block text-black mb-2 my-5">Date of Birth</label>
                <label className="input input-bordered flex items-center gap-2 my-1">
                    <input type="date" className="grow" placeholder="DOB" name="dob" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                </label>
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
            <button className="btn btn-accent mt-5" onClick={handleEditProfile}>Update Profile<AiOutlineEdit />{loading && <span className="loading loading-dots loading-md"></span>}</button>
        </>
    )
}

export default EditProfileModal