import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/userSlice'
import Login from '../features/auth/Login'

function Navbar() {
  
  var {loginStatus,role} =  useSelector(state=>state.user)
  var dispatch = useDispatch()
  var navigate = useNavigate();

  function handlelogout() {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    
                          <li class="nav-item">
                             <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                          </li>
                          <li class="nav-item">
                              {
                                
                                (role==="")?null:(role=='user')?<Link class="nav-link" to="/purchasedcourses">purchased-courses</Link>:<Link  class="nav-link" to="/approvalpending">Approval-Pending</Link>
                              }
                          </li>
                          <li class="nav-item">
                              {
                                (role==="")?null:(role=='user')?<Link class="nav-link" to="/approvedcourses">Approved-courses</Link>:<Link  class="nav-link" to="/adminapprovedcourses">Approved-Courses</Link>
                              }
                          </li>
                          <li class="nav-item">
                              {
                                (role==="admin")?<Link  class="nav-link" to="/addnewcourse">Add-New-Course</Link>:null
                              }
                          </li>
                       
                            <li class="nav-item">
                                {
                                  (role=="user" || role=='admin')?<button className='btn btn-success' onClick={()=>{handlelogout()}}>Logout</button>:null
                                }
                            </li>
                            <li class="nav-item">
                                {
                                  (role==="")?<Link className='btn btn-success' to="/login">Login</Link>:null
                                }
                            </li>
                            <li class="nav-item">
                                {
                                  (role==="")?<Link className='btn btn-success ms-2' to="/signup">SignUp</Link>:null
                                }
                            </li>
          
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar