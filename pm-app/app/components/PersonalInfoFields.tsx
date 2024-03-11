
interface PersonalInfoProps {
  
}

const PersonalInfoFields: React.FC<PersonalInfoProps> = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return (
    <div className="container mx-auto p-8 mt-10 flex flex-row">
      <div className="bg-white shadow-xl rounded p-10 mb-4">
        <h2 className="text-2xl font-bold mb-8 text-secondary">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col mb-10">
            <label className="text-sm font-semibold">Name</label>
            <p className="mt-1">{user?.name}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Email</label>
            <p className="mt-1">{user?.email}</p>
          </div>
          <div className="flex flex-col mb-10">
            <label className="text-sm font-semibold">Date of Birth</label>
            <p className="mt-1">{user?.dob}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Phone</label>
            <p className="mt-1">+91 {user?.phone}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Gender</label>
            <p className="mt-1">{user?.gender}</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-10 mb-4 ml-10">
        <h2 className="text-2xl font-bold mb-4 text-secondary mb-8">Education</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">10th</label>
            <p className="mt-1">{user?.tenth} %</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">12th</label>
            <p className="mt-1">{user?.twelth} %</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Graduation</label>
            <p className="mt-1">{user?.graduation} /10</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-secondary mb-8 mt-10">Address</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">City</label>
            <p className="mt-1">{user?.city}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">State</label>
            <p className="mt-1">{user?.state}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Nationality</label>
            <p className="mt-1">{user?.nation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoFields;
