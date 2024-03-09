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
        return {message: 'Error'};
    }

    return {message: 'Success'}
}