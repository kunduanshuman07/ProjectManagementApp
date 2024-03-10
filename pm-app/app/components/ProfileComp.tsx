
'use client'

import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import EmploymentFields from "./EmploymentFields";
import PersonalInfoFields from "./PersonalInfoFields";
import EditProfile from "./EditProfile";


const ProfileComp = () => {
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>();
  useEffect(()=>{
    const user = localStorage.getItem('user');
    setUserDetails(user);
  },[])
  return (
    <div className="flex flex-row overflow-y-hidden">
      <div className="flex flex-col">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-40 h-40 mt-20 ml-10">
            <span className="text-3xl">D</span>
          </div>
        </div>
        <button className="btn ml-10 mt-5" onClick={()=>setUpdateProfile(true)}>Edit Profile <MdEdit /></button>
      </div>
      <div className="flex flex-row">
        <EmploymentFields userDetails={userDetails}/>
        <PersonalInfoFields userDetails={userDetails}/>
      </div>
      {updateProfile && <EditProfile setModalOpen={setUpdateProfile} modalOpen={updateProfile} />}
    </div>
  )
}

export default ProfileComp