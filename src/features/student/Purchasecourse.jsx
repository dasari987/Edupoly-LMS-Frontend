import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useUserPurchasedCoursesMutation } from '../../services/usercourses'

function Purchasecourse() {
   var {state} = useLocation()
   var navigate = useNavigate()
   var params = useParams()
   var [purchasecourseFn] = useUserPurchasedCoursesMutation();

   function formsubmit(e){
    e.preventDefault()

       purchasecourseFn({course:state,cid:params.cid})
       .then((res)=>{
           navigate('/purchasedcourses')
       })
       .catch((err)=>{
        console.log(err)
       })
   }

  return (
    <div className='m-2 border p-3'> 
          <form class="row g-3 d-flex flex-wrap flex-column justify-content-center align-items-center" onSubmit={formsubmit} >
            <div class="col-md-5">
                <label for="inputEmail4" class="form-label">CourseName</label>
                <input type="text" class="form-control" value={state.coursename} />
            </div>
            <div class="col-md-5">
                <label for="inputPassword4" class="form-label">CourseDuration</label>
                <input type="number" class="form-control" value={state.duration} />
            </div>
            <div class="col-5">
                <label for="inputAddress" class="form-label">Price</label>
                <input type="text" class="form-control"  value={state.price} />
            </div>
            <div class="col-5">
                <label for="inputAddress2" class="form-label">Trainer</label>
                <input type="text" class="form-control"  value={state.trainer} />
            </div>
            <div class="col-5">
                <button type="submit" class="btn btn-success">Pay</button>
            </div>
        </form>
    </div>
  )
}

export default Purchasecourse