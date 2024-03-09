'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function fetchUsers(){ 
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const { data: users, error } = await supabase
        .from('pm-users')
        .select('*');

    return {message: 'Success', data: users};
}