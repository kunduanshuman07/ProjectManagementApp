'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { getServerSession } from "next-auth/next"
export async function fetchUser(){ 
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const session = await getServerSession();
    const { data: users, error } = await supabase
        .from('pm-users')
        .select('*').match({email: session?.user?.email});

    return {message: 'Success', userData: users};
}