'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
export async function fetchTasks() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*').order('deadline', { ascending: true });
    if (error) {
        return { allTasks: [] };
    }
    return { allTasks: tasks };

    return { allTasks: [] };
}