'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function registerUser(formData: any) {
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data, error } = await supabase
        .from('pm-users')
        .insert([
            {
                name, email, password
            }
        ])
    if (error) {
        return { message: 'Error' };
    }
    return { message: 'Success' }


}