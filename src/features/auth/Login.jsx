import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUserloginMutation } from '../../services/authentication';
import { useDispatch } from 'react-redux';
import { setLoginStatus } from './userSlice';


function Login() {
    var [loginFn] = useUserloginMutation();
    var navigate = useNavigate()
    var dispatch = useDispatch();
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

    const formik = useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema: Yup.object({
          username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          password: Yup.string().min("2",'password is too short').max('100',"password is too long").required('Required')
      }),
      onSubmit: values => {
        loginFn(values).then((res)=>{
            if(res.data.msg=='loginsuccess'){
                window.localStorage.setItem("token",res.data.token)
                window.localStorage.setItem("role",res.data.role)
                dispatch(setLoginStatus(res.data))
                navigate('/home')
            }
            else{
                console.log("invalid details")
            }
          })
      },
    });


    return (
        <div className='d-flex justify-content-center align-items-center border ' style={{height:"90vh"}}>
            <div className='w-25 text-center border border-success rounded p-5 mb-5'>

            <form onSubmit={formik.handleSubmit}>
                {/* <label htmlFor="username">User Name</label> &nbsp; */}
                <input id="username" type="text" placeholder='User Name' className='form-control' ref={ref1} onKeyUp={changeref}
                {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
                ) : null}
                <br />
             
        
                {/* <label htmlFor="password">Password</label> &nbsp; */}
                <input id="password" type="password" placeholder='Password' ref={ref2}  className='form-control' 
                {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
                ) : null}
                <br />
        
                <button type="submit" className='btn btn-success'>Login</button>
            </form>
           </div>
        </div>
    );
  };

export default Login