import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import Allcourses from './features/allcourses/Allcourses';
import Signup from './features/auth/Signup';
import Login from './features/auth/Login';
import Coursedetails from './features/allcourses/Coursedetails';
import Purchasecourse from './features/student/Purchasecourse';
import Purchasedcourses from './features/student/Purchasedcourses';
import Adminapprovalpending from './features/admin/Adminapprovalpending';
import Adminapproved from './features/admin/Adminapproved';
import Courseform from './features/admin/Courseform';
import Approvedcourses from './features/student/Approvedcourses';
import Accessingcourse from './features/student/Accessingcourse';
import Editcourse from './features/allcourses/Editcourse';


 const router = createBrowserRouter([
   {
     path: "/",
     element: <App></App>,
     children:[
      {
         path:'/',
         element: <Allcourses></Allcourses>
      },
      {
         path:'/coursedetails',
         element: <Coursedetails></Coursedetails>
      },
      {
         path:'/home',
         element: <Allcourses></Allcourses>
      },
      {
         path:'/signup',
         element: <Signup></Signup>
      },
      {
         path:'/login',
         element: <Login></Login>
      },
      {
         path:'/purchasecourse/:cid',
         element:<Purchasecourse></Purchasecourse>
      },
      {
         path:'/purchasedcourses',
         element:<Purchasedcourses></Purchasedcourses>
      },
      {
         path:'/approvedcourses',
         element:<Approvedcourses></Approvedcourses>
      },
      {
         path:'/approvalpending',
         element:<Adminapprovalpending></Adminapprovalpending>
      },
      {
         path:'/coursestarted',
         element:<Accessingcourse></Accessingcourse>
      },
      {
         path:'/adminapprovedcourses',
         element:<Adminapproved></Adminapproved>
      },
      {
         path:'/addnewcourse',
         element:<Courseform></Courseform>
      },
      {
         path:'/editcourse',
         element:<Editcourse></Editcourse>
      },
     ]
   },
 ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
       <RouterProvider router={router}/>
   </Provider>
);


