import React from "react";
import HighLightText from "./HighLightText";
import know_your_progress from "../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../assets/Images/Plan_your_lessons.png"
import CTButton from "../HomePage/Button";

const LearningLanguageSection = () => {
    return (
        <div className="mt-[100px] mb-16">
            <div className="flex flex-col gap-5">
                <div className="text-4xl font-semibold text-center">
                    Your Swiss Knife for
                    <HighLightText text={"learning any language"} />                     
                </div>
                <div className="text-center text-richblack-600 mx-auto text-base mt-4">
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </div>

                <div className="flex flex-col items-center justify-center mt-5 lg:flex-row">
                    <img 
                         src = {know_your_progress}
                         alt="KnowYourProgressImage"
                         className="object-contain -mr-32"
                    />
                    <img
                         src = {compare_with_others}
                         alt="comparewihtothers"
                         className="object-contain"
                    />
                    <img
                         src = {plan_your_lesson}
                         alt="planyourlesson"
                         className="object-contain -ml-36"
                    />
                </div>

                <div className="w-fit flex mx-auto ">
                    <CTButton active={true} linkto={"/signup"}>
                       <div>
                           learn more
                       </div>
                    </CTButton>
                </div>
            </div>
        </div>
    )
} 

export default LearningLanguageSection;