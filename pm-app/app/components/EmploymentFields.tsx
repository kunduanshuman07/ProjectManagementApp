
interface EmploymentProps{
  userDetails: any|null;
}

const EmployeeProfile:React.FC<EmploymentProps> = ({userDetails}) => {
  return (
    <div className="container mx-auto p-6 mt-10 ml-10">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Employee Profile</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Full Name</label>
            <p className="mt-1">Anshuman Kundu</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Employee ID</label>
            <p className="mt-1">607866</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Department</label>
            <p className="mt-1">Delivery Function</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Designation</label>
            <p className="mt-1">Software Development Engineer - I</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Joining Date</label>
            <p className="mt-1">23rd March 2000</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Status</label>
            <p className="mt-1">Full Time</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Manager</label>
            <p className="mt-1">Gunjan Rajwania</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">HR</label>
            <p className="mt-1">Gunjan Rajwania</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
