import React from 'react'
import { useGetAllUserCourseQuery } from '../../services/usercourses'

function Purchasedcourses() {
    var {isLoading,data} = useGetAllUserCourseQuery()
    console.log(data)
  return (
    <div className='m-3  p-3 border '>
      <h3>Purchasedcourses</h3>
       <div className='d-flex'>
        {
          (data)?.map((course)=>{
            console.log("course",course)
            var data = JSON.parse(JSON.stringify(course))
            data.status.sort((a,b)=>{
              if(a.timestamp<b.timestamp){
                return 1
              }
              else{
                return -1
              }
            })
            return(
              <div key={course['_id']} className="border border-secondary rounded-1 w-25 p-3 m-3">
                  <img src={course.image} alt="image error" className="w-25"/>
                  <div>Coursename : {course.coursename}</div>
                  <div>Trainer : {course.trainer}</div>
                  <div>Duration : {course.duration}months</div>
                  <div>Price : {course.price}</div>
                  {
                    data.status[0].code==='purchased' && <button className='btn btn-warning mt-2'>Waiting For Admin Approval</button>
                  }
                  {
                    data.status[0].code==='Approved' && <button className='btn btn-success mt-2'>Approved</button>
                  }
              </div>
            )
         })
        }
      </div>
    </div>
  )
}

export default Purchasedcourses