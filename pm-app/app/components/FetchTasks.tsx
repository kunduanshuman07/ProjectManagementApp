import React from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import GridTable from "../components/GridTable";
const FetchTasks = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore});
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    const { data: tasks, error } = await supabase
        .from('watches')
        .select('*');
    if (error) {
        console.log('Error fetching tasks');
    }
  return (
    <div>
         <GridTable tasks={tasks}/>
    </div>
  )
}

export default FetchTasks