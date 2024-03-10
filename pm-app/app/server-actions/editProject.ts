'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function editProject(formData: any) {
    const projectId = formData.projectId;
    const projectTitle = formData.projectTitle;
    const projectCode = formData.projectCode;
    const deadline = formData.deadline;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data, error } = await supabase
        .from('projects')
        .update(
            {
                project_title: projectTitle,
                project_code: projectCode,
                deadline
            }
        ).match({ id: projectId });
    if (error) {
        return { message: 'Error' };
    }
    return { message: 'Success' }
}