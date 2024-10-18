import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Coursedetails() {
   var {state} =  useLocation();
   var [coudata, setCoudata] = useState(state)
   var {loginStatus,role} = useSelector(state=>state.user)
   var navigate = useNavigate()
   console.log(loginStatus,role)

   function purchasecoursee() {
    navigate(`/purchasecourse/${coudata['_id']}`,{state:coudata})
   }

  return (
    <div className='m-2 border p-3'>
       <h2>Coursedetails</h2>
       <img src={coudata.image} alt="Loading" className="w-25"/>
                        <div>Coursename : {coudata.coursename}</div>
                        <div>Trainer : {coudata.trainer}</div>
                        <div>Duration : {coudata.duration}months</div>
                        <div>Price : {coudata.price}</div>
                        <div>Technologies: {coudata.technologies}</div>
                        {
                          loginStatus?<button onClick={()=>{purchasecoursee()}} className='btn btn-success mt-2'>Purchase Course</button>:<Link to='/login' className='btn btn-success mt-2'>Login to purchase this course</Link>
                        }
                        <h3>Course Content</h3>
                        {
                            coudata.videos.map((e,i)=>{
                              return <div className='border border-dark p-3 mb-1 m-2'>
                                      <div >{e.videotitle}</div>
                                      {/* <a href={e.videolink} target="blank" className={(window.localStorage.getItem("token"))?'d-block':'d-none'}>Video Link</a> */}
                              </div>
                            })
                        }
                        
    </div>
  )
}

export default Coursedetails