'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthCompRegister = () => {
    const router = useRouter();
    const handleRegister = () => {
        router.push('/projects')
    }
    return (
        <div className='card w-96 bg-base-120 shadow-xl p-10 mx-auto mt-10'>
            <h1 className="font-bold text-center">Project Management</h1>
            <div className='card-body'>
                <label className="input input-bordered flex items-center gap-2 mt">
                    <input type="text" className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                    <input type="password" className="grow" placeholder='Password' />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                    <input type="text" className="grow" placeholder='Confirm Password' />
                </label>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary font-bold" onClick={handleRegister}>Register</button>
            </div>
            <a href='/login' className='mt-4 text-center'>Existing user? <span className='font-bold'>Login</span></a>
        </div>
    )
}

export default AuthCompRegister