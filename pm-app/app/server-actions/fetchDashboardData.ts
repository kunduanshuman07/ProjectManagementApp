'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function fetchDashboardData() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data: projects } = await supabase
        .from('projects')
        .select('*');
    const { data: tasks } = await supabase.from('tasks').select('*');
    const { data: iptasks } = await supabase.from('tasks').select('*').match({ status: 'In Progress' });
    const { data: donetasks } = await supabase.from('tasks').select('*').match({ status: 'Done' });
    const { data: hightasks } = await supabase.from('tasks').select('*').match({ priority: 'High' });
    const { data: Medtasks } = await supabase.from('tasks').select('*').match({ priority: 'Med' });
    const { data: Lowtasks } = await supabase.from('tasks').select('*').match({ priority: 'Low' });
    const { data: users } = await supabase.from('pm-users').select('*');
    const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .order('deadline', { ascending: true })
        .limit(1);
    const ProjectsCount = projects ? projects.length : 0;
    const TasksCount = tasks ? tasks.length : 0;
    const IpCount = iptasks ? iptasks.length : 0;
    const DoneCount = donetasks ? donetasks.length : 0;
    const HighCount = hightasks ? hightasks.length : 0;
    const MedCount = Medtasks ? Medtasks.length : 0;
    const LowCount = Lowtasks ? Lowtasks.length : 0;
    const UsersCount = users ? users.length : 0;
    const ClosestProject = projectsData?.[0];
    return { ProjectsCount, TasksCount, IpCount, DoneCount, HighCount, MedCount, LowCount, UsersCount, ClosestProject };
}