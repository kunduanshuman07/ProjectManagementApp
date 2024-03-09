'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function loginUser(formData: any) {
    const email = formData.email;
    const password = formData.password;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const {data} = await supabase.from('pm-users').select('*').match({email: email});
    if(data?.[0].password===password){
        return {message: 'Login Succesfull', data};
    }
    return { message: 'Invalid Credentials', data: null }


}