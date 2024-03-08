import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"

const GridTable = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    const { data: tasks, error } = await supabase
        .from('watches')
        .select('*');
    if (error) {
        console.log('Error fetching tasks');
    }
    return (
        <div className="overflow-x-auto  p-10">
            <table className="table">
                <thead>
                    <tr>
                        <th className="font-bold">Tasks</th>
                        <th className="font-bold">Assignee</th>
                        <th className="font-bold">Priority</th>
                        <th className="font-bold">Deadline</th>
                        <th className="font-bold">Status</th>
                        <th className="font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task: any) => (
                        <tr key={task.id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">{task.task}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{task.assignee}</td>
                            <td>
                                <button className="btn btn-warning btn-xs">{task.priority}</button>
                            </td>
                            <td>{task.deadline}</td>
                            <td><button className="btn btn-primary btn-xs">{task.status}</button></td>
                            <th>
                                <button className="btn btn-xs">Details</button>
                            </th>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default GridTable
