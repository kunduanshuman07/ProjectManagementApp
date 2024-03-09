'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function registerUser(formData: any){
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})

    const {data, error} = await supabase
        .from('pm-users')
        .insert([
            {
                name, email, password
            }
        ])
    if (error){
        console.error('Error inserting data', error)
        return;
    }

    if(!error){
        redirect('/projects');
    }

    return {message: 'Success'}
}