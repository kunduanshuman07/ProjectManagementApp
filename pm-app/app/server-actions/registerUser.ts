'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function registerUser(formData: any) {
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { error } = await supabase
        .from('pm-users')
        .insert([
            {
                name, email, password
            }
        ])
    
    if (error) {
        return { message: 'Error', data: null };
    }
    const {data} = await supabase.from('pm-users').select('*').match({email: email});
    return { message: 'Success', data }


}