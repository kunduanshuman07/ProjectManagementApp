'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function deleteTask(formData: any){
    const taskId=formData.get('taskId')
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user;
    if (!user){
        console.error('User is not authenticated within server action')
        return;
    }
    const {error} = await supabase
        .from('watches')
        .delete()
        .match({id: taskId, user_id: user.id})

    if (error){
        console.log('Error deleting data', error)
        return;
    }

    revalidatePath('/projects')

    return {message: 'Success'}
}