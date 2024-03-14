
'use client'

import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import PersonalInfoFields from "./PersonalInfoFields";
import EditProfile from "./EditProfile";
import { fetchUser } from "../server-actions/fetchUser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfileComp = () => {
  const { data } = useSession();
  const router = useRouter();
  const [user, setUser] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const { userData }: any = await fetchUser();
      setUser(userData?.[0]);
      setLoading(false);
    }
    fetchUserData();
  }, [])
  const handleLogin = () => {
    router.push('/login');
  }
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);
  return (
    <div className="flex flex-col overflow-y-hidden">
      {data == null ?
        <div className='flex flex-col p-10 rounded mt-20 '>
          <h1 className='font-bold text-center'>Please login to view Profile</h1>
          <button className='btn btn-accent text-white w-20 mx-auto mt-10 font-bold' onClick={handleLogin}>Login</button>
        </div>
        :
        loading ? <></> :
          <>
            <div className="flex flex-col bg-neutral p-5">
              <button className="btn ml-10 mt-5 w-1/5 btn-info text-white font-bold" onClick={() => setUpdateProfile(true)}>Edit Profile <MdEdit /></button>
            </div>
          </>}
      <PersonalInfoFields user={user} setUser={setUser} loading={loading} />
      {updateProfile && <EditProfile setModalOpen={setUpdateProfile} modalOpen={updateProfile} user={user} />}
    </div>
  )
}

export default ProfileComp