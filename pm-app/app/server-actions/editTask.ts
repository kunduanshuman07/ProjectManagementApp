'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function editTask(formData: any){
    const task = formData.get('task')
    const taskId=formData.get('taskId')
    const task_description = formData.get('task_description')
    const deadline = formData.get('deadline')
    const assignee = formData.get('assignee')
    const priority = formData.get('priority')
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user
    console.log(task, taskId, task_description, deadline, assignee, priority)
    if (!user){
        console.error('User is not authenticated within server action')
        return;
    }
    const {data, error} = await supabase
        .from('watches')
        .update(
            {
                task,
                task_description,
                deadline,
                assignee,
                priority,
                status: 'IP',
            }
        ).match({id: taskId, user_id: user.id});

    if (error){
        console.log('Error updating data', error)
        return;
    }

    revalidatePath('/projects')

    return {message: 'Success'}
}