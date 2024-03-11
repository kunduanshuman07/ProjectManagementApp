'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function editUserProfile(formData: any) {
    const userId = formData.userId;
    const name = formData.name;
    const dob = formData.dob;
    const phone = formData.phone;
    const tenth = formData.tenth;
    const twelth = formData.twelth;
    const graduation = formData.graduation;
    const city = formData.city;
    const state = formData.state;
    const nation = formData.nation;
    const gender = formData.gender;
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data, error } = await supabase
        .from('pm-users')
        .update(
            {
                name, dob, phone, gender, tenth, twelth, graduation, city, state, nation
            }
        ).match({ id: userId });
    if (error) {
        return { message: 'Error' };
    }
    const { data: userData } = await supabase.from('pm-users').select('*').match({id: userId});
    return { message: 'Success', userData }
}