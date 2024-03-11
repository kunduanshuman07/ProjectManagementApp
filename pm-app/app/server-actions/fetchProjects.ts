'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function fetchProjects() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data: projects, error } = await supabase
        .from('projects')
        .select('*').order('deadline', { ascending: true });;

    if (error) {
        return { message: 'Error', allProjects: [] };
    }
    return { message: 'Success', allProjects: projects };
}