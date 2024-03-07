'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";
const AuthCompLogin = () => {
    const supabase = createClientComponentClient();
    return (
        <div className='flex justify-center items-center h-screen bg-base-200'>
            <div className='card w-96 bg-base-100 shadow-xl p-5'>
                <button className="btn btn-neutral font-bold text-center mt-5 ">
                    <FaProjectDiagram/>
                    Project Management</button>
                <div className='card-body'>
                    <Auth
                        supabaseClient={supabase}
                        redirectTo='http://localhost:3000/auth/callback'
                        providers={[]}
                        appearance={{
                            style: {
                              button: { background: '#16ccae', color: 'white', borderRadius: "10px", padding: "5px 8px", margin: "auto auto", fontWeight: "bold" },
                              anchor: { color: 'black', fontSize: "12px" },
                              input: {border: "2px solid #c8cfce", borderRadius: "10px", padding: "10px 5px"},
                              label: {marginBottom: "4px", fontWeight: "bold"}
                            },
                          }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AuthCompLogin
