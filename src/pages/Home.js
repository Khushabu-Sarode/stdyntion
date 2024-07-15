import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import {Link} from "react-router-dom";
import HighLightText from "../components/HomePage/HighLightText";
import CTButton from "../components/HomePage/Button";
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/HomePage/CodeBlocks";
import TimeLineSection from "../components/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/HomePage/LearningLanguageSection";
import InstructorSection from "../components/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/HomePage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
    return (
      <div className="">

         {/* Section 1  */}

          <div className=" relative max-w-maxContent mx-auto flex flex-col w-11/12 items-center justify-between text-white">
            <Link to={"/signup"}>
            <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-2 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                   <p className="text-white">Become an Instructor</p>
                        <div className="text-white">
                        < FaArrowRight />
                        </div>
                    </div>
                </div>
            </Link>
  
            <div className="mt-8 text-white text-center text-4xl font-semibold">
              Empower Your Future with
              <HighLightText text={"Coding Skills"}/>
            </div>

            <div className=" w-[90%] text-center text-lg font-bold text-richblack-300">
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
             
            <div className="flex flex-row gap-7 text-white mt-8 mb-11">
              <CTButton active={true} linkto={"/signup"}>
                  Learn More
              </CTButton>

              <CTButton active={false} linkto={"/login"}>
                  Book a Demo
              </CTButton>
              
            </div>
         

         

             <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>


        
        <div className="mr-[90px] ">
     {/* Code Section 1  */}
           <div className="">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className=" text-white text-4xl font-semibold w-[550px]  ">
                Unlock your
                <HighLightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute mt-10 ml-10"></div>}
          />
           </div>

        {/* Code Section 2 */}
           <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className=" text-white text-4xl font-semibold w-[550px] ">
                Start
                <HighLightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute mt-10 ml-12"></div>}
          />
           </div>
          
        </div>

        <ExploreMore/>
        </div>
         {/* Section 2  */}
         <div className="bg-pure-greys-5 text-richblack-700">
           <div className="homepage_bg h-[310px]">
               <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                <div className="h-[150px]"></div>
                 <div className="flex flex-row gap-7 text-white">
                     <CTButton active={true} linkto={"/signup"}>
                        <div className="flex items-center gap-2">
                          Explore Full Catalog
                          <FaArrowRight/>
                        </div>
                     </CTButton>
                     <CTButton active={false} linkto={"/signup"}>
                      <div>Learn More</div>
                     </CTButton>
                 </div>
               </div>
           </div>

           <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 ">
              <div className="flex flex-row gap-5 mb-14 mt-[95px] ">
                <div className="text-4xl font-semibold w-[45%]">
                  Get the Skills you need for a
                  <HighLightText text={"Job that is in demand"} />
                </div>
                <div className="flex flex-col gap-10 w-[40%] items-start">
                  <div className="text-[16px] flex items-center">
                   The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                  </div>

                  <CTButton active={true} linkto={"/signup"}>
                    <div>
                      Learn more
                    </div>
                  </CTButton>
                </div>

              </div>

           
           <TimeLineSection/>

           <LearningLanguageSection />

           </div>

         </div>

         {/* Section 3  */}
         <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white sm:flex-col">
            
            <InstructorSection />

            <h2 className="text-center text-4xl font-semibold mt-10">review from Other Learners</h2>

            {/* review slider here  */}
            <div >
            <div className='flex flex-col justify-between'>
            <ReviewSlider/>
            </div>
             
            </div>
         </div>


         {/* Section 4  */}
         <div className="mt-32">
           <Footer/>
         </div>

      </div>
    )
}

export default Home;