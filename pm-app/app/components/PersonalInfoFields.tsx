
import { SiNamecheap } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGenderless } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { GiArmorDowngrade } from "react-icons/gi";
import { GiArmorUpgrade } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md"
import { SiReverbnation } from "react-icons/si";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface FieldProps {
  user: any;
  setUser: (user: any) => void;
  loading: boolean
}

const PersonalInfoFields: React.FC<FieldProps> = ({ user, setUser, loading }) => {
  const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
  const { data } = useSession();
  return (
    <div className="container flex flex-col">
      {
        data == null ? <></> :
          loading ?
            <div className='flex flex-row rounded mt-20'>
              <h1 className='font-bold ml-auto mr-5 text-accent'>Loading Profile...</h1>
              <span className='loading text-accent font-bold loading-bars text-center mr-auto'></span>
            </div>
            :
            <>
              <div className={`flex p-5 mt-5 ${screenWidth<1000? 'flex-col': 'flex-row'}`}>
                <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${screenWidth<1000?'': 'w-1/3'}`}>
                  <button className="text-xl font-bold mb-3 text-gray-800 text-center btn mx-auto">Personal Details</button>
                  <div className="text-gray-700 mt-5 flex flex-col">
                    <button className="btn btn-success text-white font-bold btn-sm"><SiNamecheap /> Name: {user.name}</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2">
                      <MdAlternateEmail /> Email: {user.email}</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2">
                      <FaPhoneAlt /> Phone: +91 {user.phone}</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2"><FaGenderless /> Gender: {user.gender}</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2"><FaBirthdayCake /> Date of Birth: {user.dob}</button>
                  </div>
                </div>
                <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${screenWidth<1000?'mt-2': 'w-1/3'}`}>
                  <button className="text-xl font-bold mb-3 text-gray-800 text-center btn mx-auto">Education</button>
                  <div className="text-gray-700 mt-5 flex flex-col">
                    <button className="btn btn-success text-white font-bold btn-sm"><GiArmorDowngrade /> 10th Grade: {user.tenth}%</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2"><GiArmorUpgrade /> 12th Grade: {user.twelth}%</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2"><GiUpgrade /> Graduation: {user.graduation} GPA</button>
                  </div>
                </div>
                <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${screenWidth<1000?'mt-2': 'w-1/3'}`}>
                  <button className="text-xl font-bold mb-3 text-gray-800 text-center btn mx-auto">Address</button>
                  <div className="text-gray-700 mt-5 flex flex-col">
                    <button className="btn btn-success text-white font-bold btn-sm"><FaCity /> City: {user.city}</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2"><MdOutlineRealEstateAgent /> State: {user.state}</button>
                    <button className="btn btn-success text-white font-bold btn-sm mt-2"><SiReverbnation /> Country: {user.nation}</button>

                  </div>
                </div>
              </div>
            </>
      }
    </div>



  );
};

export default PersonalInfoFields;
