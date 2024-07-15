


// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilderForm/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
//  import PublishCourse from "./PublishCourse"

// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     {
//       id: 1,
//       title: "Course Information",
//     },
//     {
//       id: 2,
//       title: "Course Builder",
//     },
//     {
//       id: 3,
//       title: "Publish",
//     },
//   ]

//   return (
//     <>
//       <div className="relative mb-2 flex w-full justify-center">
//         {steps.map((item) => (
//           <>
//             <div
//               className="flex flex-col items-center "
//               key={item.id}
//             >
//               <button
//                 className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
//                   step === item.id
//                     ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                     : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                 } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
//               >
//                 {step > item.id ? (
//                   <FaCheck className="font-bold text-richblack-900" />
//                 ) : (
//                   item.id
//                 )}
//               </button>
              
//             </div>
//             {item.id !== steps.length && (
//               <>
//                 <div
//                   className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
//                   step > item.id  ? "border-yellow-50" : "border-richblack-500"
//                 } `}
//                 ></div>
//               </>
//             )}
//           </>
//         ))}
//       </div>

//       <div className="relative mb-16 flex w-full select-none justify-between">
//         {steps.map((item) => (
//           <>
//             <div
//               className="flex min-w-[130px] flex-col items-center gap-y-2"
//               key={item.id}
//             >
              
//               <p
//                 className={`text-sm ${
//                   step >= item.id ? "text-richblack-5" : "text-richblack-500"
//                 }`}
//               >
//                 {item.title}
//               </p>
//             </div>
            
//           </>
//         ))}
//       </div>
//       {/* Render specific component based on current step */}
//       {step === 1 && <CourseInformationForm />}
//        {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />} 
//     </>
//   )
// }
import React from 'react'; 

import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

import CourseBuilderForm from "./CourseBuilderForm/CourseBuilderForm";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";
import PublishCourse from "./PublishCourse";
import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import SidebarLink from '../SidebarLink';
import { sidebarLinks } from '../../../../data/dashboard-links';
import { logout } from '../../../../services/operations/authAPI';
import ConfirmationModal from '../../../common/ConfirmationModal';

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course);

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];

  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    )
  }


  return (
    <>
       <div className='relative'>
          
        <div className='absolute -top-[92px]'>
        <div className="flex h-[calc(124vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 w-[250px] absolute">
        <div className="flex flex-col">
        {sidebarLinks.map((link) => {
        if (link.type && user?.accountType !== link.type) return null
        return (
          <SidebarLink key={link.id} link={link} iconName={link.icon} />
        )
      })}
    </div>
    <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
    <div className="flex flex-col">
      <SidebarLink
        link={{ name: "Settings", path: "/dashboard/settings" }}
        iconName="VscSettingsGear"
      />
      <button
        onClick={() =>
          setConfirmationModal({
            text1: "Are you sure?",
            text2: "You will be logged out of your account.",
            btn1Text: "Logout",
            btn2Text: "Cancel",
            btn1Handler: () => dispatch(logout(navigate)),
            btn2Handler: () => setConfirmationModal(null),
          })
        }
        className="px-8 py-2 text-sm font-medium text-richblack-300"
      >
        <div className="flex items-center gap-x-2">
          <VscSignOut className="text-lg" />
          <span>Logout</span>
        </div>
      </button>
    </div>
    </div>
    {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
       </div>


      <div className="relative mb-2 flex w-full justify-center ml-[140px]">
        {steps.map((item) => (
          <React.Fragment key={item.id}> {/* Use React.Fragment */}
            <div className="flex flex-col items-center">
              <button
                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                  step === item.id
                    ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
              >
                {step > item.id ? (
                  <FaCheck className="font-bold text-richblack-900" />
                ) : (
                  item.id
                )}
              </button>
            </div>
            {item.id !== steps.length && (
              <div
                className={`h-[calc(34px/2)] w-[33%] border-dashed border-b-2 ${
                  step > item.id ? "border-yellow-50" : "border-richblack-500"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="relative mb-16 flex w-full select-none justify-between ml-[270px] mt-3">
        {steps.map((item) => (
          <div
            className="flex min-w-[130px] flex-col items-center gap-y-2"
            key={item.id}
          >
            <p
              className={`text-sm ${
                step >= item.id ? "text-richblack-5" : "text-richblack-500"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      {/* Render specific component based on current step */}
      {step === 1 && <CourseInformationForm />}
      <div className='bg-yellow-5'>
      {step === 2 && <CourseBuilderForm />}
      </div>
      <div>
      {step === 3 && <PublishCourse />}
      </div>
      </div>
    </>
  );
}
