'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function addTask(formData: any){
    const task = formData.get('task')
    const task_description = formData.get('task_description')
    const deadline = formData.get('deadline')
    const assignee = formData.get('assignee')
    const priority = formData.get('priority')
    const status = formData.get('status')
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user

    if (!user){
        console.error('User is not authenticated within server action')
        return;
    }

    const {data, error} = await supabase
        .from('watches')
        .insert([
            {
                task,
                task_description,
                deadline,
                assignee,
                priority,
                status: status,
                user_id: user.id
            }
        ])

    if (error){
        console.error('Error inserting data', error)
        return;
    }

    revalidatePath('/projects')

    return {message: 'Success'}
}