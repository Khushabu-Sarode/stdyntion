import React from "react";
import Instructor from "../../assets/Images/Instructor.png";
import HighLightText from "./HighLightText";
import CTButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa6";

const InstructorSection = () =>{
    return (
        <div className="mt-14 ">
            <div className="flex flex-col gap-20 lg:flex-row items-center">
                <div className="w-[50%] ">
                   <img
                    src={Instructor}
                    alt=""
                    className="shadow-white"
                   />
                </div>

                <div className="w-[50%] flex flex-col gap-10 ">
                    <div className="text-4xl font-semibold w-[50%] ">
                      Become an
                      <HighLightText text={"Instructor"}/>
                    </div>

                    <p className="font-medium text-[16px] w-[80%] text-richblack-300 " >
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </p>

                    <div className="w-fit">
                    <CTButton active={true} linkto={"/signup"}>
                        <div className="flex flex-row gap-2">
                             Start Leaning Today
                             <FaArrowRight/>
                        </div>
                    </CTButton>
                    </div>
                  
                </div>

            </div>
        </div>
    )
}
export default InstructorSection;