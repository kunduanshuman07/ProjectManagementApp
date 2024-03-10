'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function fetchProjectData(formData: any) {
    const projectId = formData.projectId;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data, error } = await supabase
        .from('projects')
        .select('*').match({id: projectId})

    if (error) {
        return { message: 'Error', data: [] };
    }
    return { message: 'Success', data }
}