'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function addTask(formData: any) {
    const task = formData.get('task')
    const task_description = formData.get('task_description')
    const deadline = formData.get('deadline')
    const assigneeValue = formData.get("assignee");
    const [assigneeId, assigneeName] = assigneeValue.split("|");
    const priority = formData.get('priority')
    const status = formData.get('status')
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const {data, error} = await supabase
        .from('tasks')
        .insert([
            {
                task,
                task_description,
                deadline,
                assignee:assigneeName,
                assignee_id: assigneeId,
                priority,
                status,
            }
        ])

    redirect('/projects');

    return { message: 'Success' }
}