// 'use client'
// import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import { registerUser } from '../server-actions/registerUser';
const AuthCompRegister = () => {
    const supabase = createClientComponentClient();
    return (
        <form action={registerUser}>
            <div className='flex justify-center items-center h-screen bg-base-200'>
                <div className='card w-96 bg-base-100 shadow-xl p-5'>
                    <button className="btn btn-neutral font-bold text-center mt-5 ">
                        <FaProjectDiagram />
                        Project Management</button>
                    <div className='card-body'>
                        <div className="p-2">
                            <label htmlFor="name" className="block text-black mb-2 my-2">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                                placeholder="Enter your name"
                                required
                            />
                            <label htmlFor="email" className="block text-black mb-2 my-2">Email *</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="grow border border-gray-600 rounded py-2 px-3 w-full"
                                placeholder="Enter you email address"
                                required
                            />
                            <label htmlFor="password" className="block text-black mb-2 my-5">Create new Password *</label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                                placeholder="Enter your password"
                                required
                            />

                        </div>
                        <button className='btn btn-accent mt-5' type='submit'>Register</button>
                        <a href='/login' className='text-center underline text-xs font-bold mt-4'>Existing user? Login</a>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AuthCompRegister
