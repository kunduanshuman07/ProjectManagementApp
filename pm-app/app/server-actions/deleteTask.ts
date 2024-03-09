'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function deleteTask(taskId: any){
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {error} = await supabase
        .from('tasks')
        .delete()
        .match({id: taskId})

    if (error){
        console.log('Error deleting data', error)
        return;
    }

    redirect('/projects')

    return {message: 'Success'}
}