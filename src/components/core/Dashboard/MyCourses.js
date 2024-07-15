import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"
import CoursesTable from "./InstructorCourses/CourseTable"
import Sidebar from "./Sidebar"


export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
     <div className="absolute w-[240px] -mb-28">
      <Sidebar className="h-[]"/>
     </div>

      <div className="mb-14 relative flex items-center justify-between ml-[300px]">
        <h1 className="text-3xl font-medium text-richblack-5 mt-3">My Courses</h1>
        <div className="mr-9 mt-5">
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
        </div>
      </div>

      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}