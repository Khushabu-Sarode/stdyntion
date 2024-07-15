
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
// import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import ReactMarkdown from "react-markdown";
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import { setCourse } from '../slices/courseSlice';
import GetAvgRating from '../utils/avgRating';
import Error from "./Error"
import ConfirmationModal from "../components/common/ConfirmationModal"
import RatingStars from "../components/common/RatingStars"
import { formatDate } from '../services/formatDate';
import CourseAccordionBar from '../components/core/Course/CourseAccordionBar';
import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';
import Footer from '../components/common/Footer';
import { MdOutlineLanguage } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
const CourseDetails = () => {

    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const [loadingf, setloadingf] = useState(true);
    const {loading} = useSelector((state) => state.profile);
    const {paymentLoading} = useSelector((state)=> state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {courseId}  = useParams();

    const [courseData , setCourseData] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(null);
    useEffect(()=> {
        const getCourseFullDetails = async() => {
            try{
                const result = await fetchCourseDetails(courseId);
                console.log("Printing CourseData-> " , result);
                setCourseData(result);
                if(loadingf==true){
                setloadingf(false);
                }
            }
            catch(error) {
                console.log("Could not fetch coursse details");
            }
        }
        getCourseFullDetails();
        
    }, [courseId]);

    const [avgReviewCount, setAverageReviewCount] = useState(0);

    useEffect(()=> {
        if (!loadingf) {
        const count = GetAvgRating(courseData.data[0].ratingAndReviews);
        setAverageReviewCount(count);
        }
    },[courseData])

    const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
    useEffect(()=> {
        if (!loadingf) {
        let lectures = 0;
        courseData.data[0].courseContent.forEach((sec) => {
            lectures += sec.subSection.length || 0
        })
        setTotalNoOfLectures(lectures);
        }
    },[courseData]);


    const [isActive, setIsActive] = useState(Array(0));
    const handleActive = (id) => {
        setIsActive(
            !isActive.includes(id)
             ? isActive.concat(id)
             : isActive.filter((e)=> e != id)

        )
    }

    const handleBuyCourse = () => {
        
        if(token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
        setConfirmationModal({
            text1:"you are not Logged in",
            text2:"Please login to purchase the course",
            btn1Text:"Login",
            btn2Text:"Cancel",
            btn1Handler:() => navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),
        })

    }

    if(loading || !courseData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if(!courseData.success) {
        return (
            <div>
                <Error />
            </div>
        )
    }
    const {
        courseName,
        courseDescription,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentsEnrolled,
        createdAt,
    } = courseData.data[0];

  return (

    
   
    <div className='flex flex-col  text-white'>

        <div className='relative  flex flex-col p-8 bg-richblack-800 h-[500px] pl-[100px] '>
            <p className='text-4xl font-bold pt-[80px] pb-6 w-[880px]'>{courseName}</p>
            <p className='text-richblack-300 text-xl pb-4 w-[880px]'>{courseDescription}</p>
            <div className='flex gap-x-2 pb-3 text-xl'>
                <span >{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews?.length} reviews) `}</span>
                <span>{`(${studentsEnrolled.length} students enrolled)`}</span>
            </div>

            <div className='text-xl pb-3'>
                <p>Created By {`${instructor.firstName}`}</p>
            </div>

            <div className='flex gap-x-3 text-xl'>
                <p className='flex gap-1'>
                  <div className='mt-1 '>
                  <IoInformationCircleOutline />
                  </div>
                    Created At {formatDate(createdAt)}
                </p>
                <p className='flex gap-1'>
                    <div className='mt-1'>
                    <MdOutlineLanguage />
                    </div>
               {"  "} English
                </p>
            </div>

            <div className = "w-[438px] ml-[950px] mt-[30px] absolute ">
                <CourseDetailsCard
                    course = {courseData.data[0]}
                    setConfirmationModal = {setConfirmationModal}
                    handleBuyCourse = {handleBuyCourse}
                />
            </div>
        </div>

      <div className='w-[890px] ml-[100px]'>
        <div className="my-8 border border-richblack-600 p-8">
            <p className="text-3xl font-semibold">What you'll learn</p>
            <div className="mt-5">
              <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
            </div>
          </div>

                     {/* Course Content Section */}
          <div className="max-w-[830px] ">

          <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">Course Content</p>
              <div className="flex flex-wrap justify-between gap-2">

                <div className="flex gap-2">
                  <span> {courseContent.length} {`section(s)`} </span>
                  <span> {totalNoOfLectures} {`lecture(s)`} </span>
                  <span>{courseData.data.totalDuration} total length</span>
                </div>

                <div>
                  <button className="text-yellow-25"  onClick={() => setIsActive([])}> Collapse all sections </button>
                </div>

              </div>
            </div>

           {/* Course Details Accordion */}
           <div className="py-4">
              { courseContent?.map((course, index) => (
                 <CourseAccordionBar course={course} key = {index} isActive = {isActive} handleActive = {handleActive} />
                                ))
                }
            </div>

            {/* Author Details */}
            <div className="mb-12 py-4">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img src = {instructor.image ? instructor.image : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`}  alt="Author"  className="h-14 w-14 rounded-full object-cover" />
                <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
              </div>
              <p className="text-richblack-50">  {instructor?.additionalDetails?.about}  </p>
            </div>
    </div>
    </div>
          <div className='w-full'>
           <Footer/>
          </div>

        {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    
    </div>
  )
}

export default CourseDetails




