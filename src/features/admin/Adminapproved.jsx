import React from 'react'
import { useGetAllAdminApprovedCoursesQuery } from '../../services/usercourses'

function Adminapproved() {
  var {isLoading,data} = useGetAllAdminApprovedCoursesQuery()
   !isLoading && console.log(data)
  return (
    <div className='m-3'>
     <h4 >Adminapproved courses</h4>
     <table className='table table-striped'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Course ID</th>
            <th>Status</th>
          </tr>
        </thead>
        
        <tbody>
         {
            data?.map((usercourses)=>{
              return usercourses.purchasedcoursestatus
              .filter((course)=>{
                const sortedStatus = [...course.status].sort((a,b)=>b.timestamp-a.timestamp)
                return sortedStatus[0].code === 'Approved'
              })
              .map((course)=>{
                return <tr>
                            <td>{usercourses.uid}</td>
                            <td>{course.cid}</td>
                            <td><button className='btn btn-success'>Approved</button></td>
                      </tr>
              })
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Adminapproved





