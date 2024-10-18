import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUseraddingMutation } from '../../services/authentication';
import { useNavigate } from 'react-router-dom';


function Signup() {
    var [signupFn] = useUseraddingMutation()
    var navigate = useNavigate()
    var ref1 = useRef()
    var ref2 = useRef()

   
    useEffect(()=>{
          ref1.current.focus()
    },[])

    function changeref(e) {
       if(e.key=='Enter'){
         ref2.current.focus()
       }
    }

  // const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema: Yup.object({
          username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          password: Yup.string().required('Password is Required').min("2",'password is too short').max('100',"password is too long").required('Required')
      }),
      onSubmit: values => {
        console.log("values",values)
        signupFn(values).then((res)=>{
          if(res.data.msg=='signupsuccess'){
              navigate("/login")
          }
        })
      },
    });


    return (
        <div className='border d-flex justify-content-center align-items-center' style={{height:"90vh"}}>
          <div className='w-25 text-center border border-success rounded p-5 mb-5'>
          <form onSubmit={formik.handleSubmit}>
            {/* <label htmlFor="username">User Name</label> */}
            <input
              id="username"
              type="text"
              className='form-control'
              placeholder='User Name'
              ref={ref1}
              onKeyUp={(e)=>{changeref(e)}}
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <br />
      
            {/* <label htmlFor="password">Password</label> */}
            <input id="password" 
            type="password" 
            placeholder='Password'  
            className='form-control' 
            ref={ref2}
            {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <br />
      
            <button className='btn btn-success' type="submit">Signup</button>
          </form>
          </div>
        </div>
    );
  };

export default Signup
