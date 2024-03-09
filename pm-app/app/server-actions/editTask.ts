'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function editTask(formData: any) {
    const task = formData.task;
    const taskId = formData.taskId;
    const task_description = formData.task_description;
    const deadline = formData.deadline;
    const assigneeValue = formData.assignee;
    const [assigneeId, assigneeName] = assigneeValue.split("|");
    const priority = formData.priority;
    const status = formData.status;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data, error } = await supabase
        .from('tasks')
        .update(
            {
                task,
                task_description,
                deadline,
                assignee: assigneeName,
                assignee_id: assigneeId,
                priority,
                status,
            }
        ).match({ id: taskId });
    if (error) {
        return { message: 'Error' };
    }
    return { message: 'Success' }
}