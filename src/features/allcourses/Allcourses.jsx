import { useState } from "react"
import { useGetAllCoursesQuery } from "../../services/courses";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Allcourses(){
    var {isLoading,data} = useGetAllCoursesQuery();
    var navigate = useNavigate();

    const {loginStatus,role} = useSelector((state) => state.user); 

    function coursdetails(course) {
        navigate("/coursedetails",{state:course})
    }

    var editcourse = function(course) {
           navigate("/editcourse",{state:course})
    }

    return(
        <div className="m-3 p-2">
            <h3>All courses</h3>
            <div style={{display:'flex',flexWrap:'wrap'}}>
             {
               data?.map((course)=>{
                  return(
                    <div key={course['_id']} className="border border-secondary rounded-1 w-25 p-3 m-3">
                        <img src={course.image} alt="image error" className="w-25"/>
                        <div>Coursename : {course.coursename}</div>
                        <div>Trainer : {course.trainer}</div>
                        <div>Duration : {course.duration}months</div>
                        <div>Price : {course.price}</div>
                        <button onClick={()=>{coursdetails(course)}} className="btn btn-success me-2">Course details</button>
                        {
                          loginStatus && role ==='admin' && <button onClick={()=>{editcourse(course)}} className="btn btn-primary">Edit</button>
                        }
                    </div>
                  )
               })
             }
            </div>
        </div>
    )
}

export default Allcourses