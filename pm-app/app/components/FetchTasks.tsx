import React from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import GridTable from "../components/GridTable";
import { fetchUsers } from '../server-actions/fetchUsers';
const FetchTasks = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore});
    const {data} = await fetchUsers();
    const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*');
    if (error) {
        console.log('Error fetching tasks');
    }
  return (
    <div>
         <GridTable tasks={tasks} users={data}/>
    </div>
  )
}

export default FetchTasks