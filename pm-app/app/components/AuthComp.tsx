'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthCompLogin = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/projects')
    }
    return (
        <div className='card w-96 bg-base-120 shadow-xl p-10 mx-auto mt-20'>
            <h1 className="font-bold text-center">Project Management</h1>
            <div className='card-body'>
                <label className="input input-bordered flex items-center gap-2 mt">
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                    <input type="password" className="grow" placeholder='Password' />
                </label>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary font-bold" onClick={handleLogin}>Login</button>
            </div>
            <a href='register' className='mt-4 text-center'>New to this place? <span className='font-bold'>Register</span></a>
        </div>
    )
}

export default AuthCompLogin