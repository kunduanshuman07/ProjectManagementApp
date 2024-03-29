'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function addProject(formData: any) {
    const projectTitle = formData.projectTitle;
    const projectCode = formData.projectCode;
    const deadline = formData.deadline;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data, error } = await supabase
        .from('projects')
        .insert([
            {
                project_title: projectTitle,
                project_code: projectCode,
                deadline
            }
        ])

    if (error) {
        return { message: 'Error' };
    }
    return { message: 'Success' }
}