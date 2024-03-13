'use client'
import { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { loginUser } from "../server-actions/loginUser";
import { useRouter } from "next/navigation";
import { useUser } from "../UserContext";
const AuthCompLogin = () => {
    const {user, setUser} = useUser();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const router=useRouter()
    const handleLogin = async() => {
        setLoading(true);
        const {message, data} = await loginUser({email, password});
        if(message==='Login Succesfull'&&data&&data.length>0){
            setUser(data[0]);
            setLoading(false);
            router.push('/');
        }
    }
    return (
        <div className='flex justify-center items-center h-screen bg-base-200'>
            <div className='card w-96 bg-base-100 shadow-xl p-5'>
                <button className="btn btn-neutral font-bold text-center mt-5 ">
                    <FaProjectDiagram />
                    Project Management App</button>
                <div className='card-body'>
                    <div className="p-2">
                        <label htmlFor="email" className="block text-black mb-2 my-2">Email *</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full"
                            placeholder="Enter you email address"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className="block text-black mb-2 my-5">Password *</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-accent mt-5' onClick={handleLogin}>Login {loading&&<span className="loading loading-dots loading-md"></span>}</button>
                    <a href='/register' className='text-center underline text-xs font-bold mt-4'>New user? Register</a>
                </div>
            </div>
        </div>
    )
}

export default AuthCompLogin
