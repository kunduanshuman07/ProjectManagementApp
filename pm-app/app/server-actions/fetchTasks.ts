'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
export async function fetchTasks({ tabState }: any) {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    let data;
    let error;
    if (tabState === 'All') {
        const { data: tasks, error } = await supabase
            .from('tasks')
            .select('*');
        if (error) {
            return { allTasks: [] };
        }
        return { allTasks: tasks };
    }
    if (tabState === 'In Progress') {
        const { data: tasks, error } = await supabase
            .from('tasks')
            .select('*').match({status: 'In Progress'});
        if (error) {
            return { allTasks: [] };
        }
        return { allTasks: tasks };
    }
    if (tabState === 'Completed') {
        const { data: tasks, error } = await supabase
            .from('tasks')
            .select('*').match({status: 'Done'});
        if (error) {
            return { allTasks: [] };
        }
        return { allTasks: tasks };
    }

    return {allTasks: []};
}