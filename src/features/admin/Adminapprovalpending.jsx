import React from 'react';
import { useGetAllUsersapprovalpendingCoursesQuery, useLazyGetAllUsersapprovalpendingCoursesQuery, useUpdateUserCourseMutation } from '../../services/usercourses';

function Adminapprovalpending() {
  const { data } = useGetAllUsersapprovalpendingCoursesQuery();
  var [getdtaFn] = useLazyGetAllUsersapprovalpendingCoursesQuery()
  const [updcourseFn] = useUpdateUserCourseMutation();
 

  async function approvecourse(user,course){
    var temp =JSON.parse(JSON.stringify(user))
     var te = temp.purchasedcoursestatus.map((cou,i)=>{
          if(cou.cid===course.cid){
            return {...cou,status: [...cou.status, { code: 'Approved', timestamp: Date.now() }]}
          }
          else{
            return cou
          }
     })
     temp.purchasedcoursestatus = te

     var da = await updcourseFn({user:temp,course:course})
     if(da.data.msg==='approved'){
          console.log("da",da)
          getdtaFn().then((res)=>{
            console.log("got data")
            console.log(res)
          }).catch((err)=>{
            console.log("err",err)
          })
     }
  }


  return (
    <div>
      <h2>Approval Pending Courses</h2>
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
            data?.map((userCourse, userIndex) => {
              return userCourse.purchasedcoursestatus
                .filter((course) => {
                  const sortedStatus = [...course.status].sort((a, b) => b.timestamp - a.timestamp);
                  return sortedStatus[0].code === 'purchased';
                })
                .map((course, courseIndex) => {
                  const sortedStatus = [...course.status].sort((a, b) => b.timestamp - a.timestamp);
                  return (
                    <tr>
                      <td>{userCourse.uid}</td>
                      <td>{course.cid}</td>
                      <td><button onClick={()=>{approvecourse(userCourse,course)}} className='btn btn-success'>Approve</button></td>
                    </tr>
                  );
                });
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Adminapprovalpending;

