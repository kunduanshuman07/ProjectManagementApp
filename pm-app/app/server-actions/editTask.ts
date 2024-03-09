'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function editTask(formData: any){
    const task = formData.get('task')
    const taskId=formData.get('taskId')
    const task_description = formData.get('task_description')
    const deadline = formData.get('deadline')
    const assigneeValue = formData.get("assignee");
    const [assigneeId, assigneeName] = assigneeValue.split("|");
    const priority = formData.get('priority')
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    console.log(task, taskId, task_description, deadline, assigneeId, assigneeName, priority)
    // const {data, error} = await supabase
    //     .from('watches')
    //     .update(
    //         {
    //             task,
    //             task_description,
    //             deadline,
    //             assignee,
    //             priority,
    //             status: 'IP',
    //         }
    //     ).match({id: taskId, user_id: user.id});
    redirect('/projects')

    return {message: 'Success'}
}