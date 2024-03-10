'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function addTask(formData: any) {
    const task = formData.task;
    const task_description = formData.task_description;
    const deadline = formData.deadline;
    const assigneeValue = formData.assignee;
    const [assigneeId, assigneeName] = assigneeValue.split("|");
    const priority = formData.priority;
    const status = formData.status;
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
    
        if (error) {
            return { message: 'Error' };
        }
        return { message: 'Success' }
}