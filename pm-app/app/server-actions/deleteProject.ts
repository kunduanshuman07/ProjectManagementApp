'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function deleteProject(projectId: any){
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {error} = await supabase
        .from('projects')
        .delete()
        .match({id: projectId})

    if (error){
        return {message: 'Error'};
    }

    return {message: 'Success'}
}