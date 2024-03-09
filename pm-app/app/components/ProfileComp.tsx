
'use client'
import EmploymentFields from "./EmploymentFields";
import PersonalInfoFields from "./PersonalInfoFields";


const ProfileComp = () => {
  return (
    <div className="flex flex-row overflow-y-hidden">
      <div className="flex flex-row">
        <EmploymentFields />
        <PersonalInfoFields />
      </div>
    </div>
  )
}

export default ProfileComp