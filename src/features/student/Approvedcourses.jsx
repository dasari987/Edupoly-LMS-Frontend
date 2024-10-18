import React from 'react'
import { useGetUserApprovedCoursesQuery } from '../../services/usercourses'
import { useNavigate } from 'react-router-dom'


function Approvedcourses() {
  var {isLoading,data} = useGetUserApprovedCoursesQuery()
  var navigate = useNavigate()
  console.log(data)

  function startcourse(course) {
     console.log(course)
     navigate('/coursestarted',{state:course})
  }

  return (
    <div>
      Approvedcourses 
      {
         data && (data.msg === 'no purchased courses')?<h3>You dont have any Purchased courses</h3>
         :<div className='d-flex flex-wrap'>{
          data?.map((course)=>{
            return <div key={course['_id']} className="border border-secondary rounded-1 w-25 p-3 m-3">
                      <img src={course.image} alt="image error" className="w-25"/>
                      <div>Coursename : {course.coursename}</div>
                      <div>Trainer : {course.trainer}</div>
                      <div>Duration : {course.duration}months</div>
                      <div>Price : {course.price}</div>
                      <button className='btn btn-success ps-3 pe-3 mt-2' onClick={()=>{startcourse(course)}}>start Watching</button>
                  </div>
            })
         }
          </div>
      }
    
      
    </div>
  )
}

export default Approvedcourses