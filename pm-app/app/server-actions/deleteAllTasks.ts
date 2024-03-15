'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
export async function deleteMultipleTasks(selectedTasks: any) {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    for (const taskId of selectedTasks) {
        const { error } = await supabase
            .from('tasks')
            .delete()
            .match({ id: taskId });

        if (error) {
            console.error(`Error deleting task with ID ${taskId}:`, error.message);
        }
    }

    return { message: 'Tasks deleted successfully' };
}