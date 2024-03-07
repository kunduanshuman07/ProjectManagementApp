
const GridTable = () => {
    return (
        <div className="overflow-x-auto  p-10">
            <table className="table">
                <thead>
                    <tr>
                        <th className="font-bold">Task</th>
                        <th className="font-bold">Assignee</th>
                        <th className="font-bold">Priority</th>
                        <th className="font-bold">Deadline</th>
                        <th className="font-bold">Status</th>
                        <th className="font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Fix the issue with the segmentation of UI</div>
                                </div>
                            </div>
                        </td>
                        <td>Anshuman Kundu</td>
                        <td>
                            <button className="btn btn-warning btn-xs">Medium</button>
                        </td>
                        <td>24-03-2024</td>
                        <td><button className="btn btn-primary btn-xs">In Progress</button></td>
                        <th>
                            <button className="btn btn-xs">Details</button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default GridTable