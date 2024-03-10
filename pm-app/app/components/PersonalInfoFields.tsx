
interface PersonalInfoProps{
  userDetails: any|null;
}

const PersonalInfoFields: React.FC<PersonalInfoProps> = ({userDetails}) => {
  return (
    <div className="container mx-auto p-8 mt-10">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Email</label>
            <p className="mt-1">kundu4coding@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Date of Birth</label>
            <p className="mt-1">23rd March 2000</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Gender</label>
            <p className="mt-1">Male</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Phone</label>
            <p className="mt-1">+91 9579130369</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">City</label>
            <p className="mt-1">Ranchi</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">State</label>
            <p className="mt-1">Jharkhand</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Nationality</label>
            <p className="mt-1">Indian</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoFields;
