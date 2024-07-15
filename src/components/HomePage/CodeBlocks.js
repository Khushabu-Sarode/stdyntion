import React from "react";
import CTButton from "../HomePage/Button";
// import HighLightText  from "./HighLightText";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";


const CodeBlocks = ({
    position,
    heading,
    subheading,
    ctabtn1 = { active: true, linkto: '#' }, // Providing default values
    ctabtn2 = { active: false, linkto: '#' }, // Providing default values
    codeblock,
    backgroundGradient,
    codeColor
}) =>{  
    return(
        <div className={`flex ${position} my-20 justify-between flex-col lg:gap-6 gap-10 `}>

        {/* section 1 */}
        <div className="flex flex-col ml-56 gap-8 w-[40%]">
           {heading}
           <div className="text-white text-base lg:w-[85%] -mt-3 font-bold">
              {subheading}
           </div>

            <div className="flex gap-7 mt-7">
              <CTButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                  <div className="flex gap-2 items-center ">
                     {ctabtn1.btnText}
                     < FaArrowRight />
                  </div>
              </CTButton>

            <CTButton  active={ctabtn2.active} linkto={ctabtn2.linkto}>
              <div className="text-white">
                {ctabtn2.btnText} 
              </div>
            </CTButton>
            </div>
        </div>

        {/* section 2  */}
        <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] ml-52 mr-5 lg:w-[470px]">
        {backgroundGradient}
        {/* Indexing */}
        <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
        </div>

       

     </div>
    )
}
export default CodeBlocks;