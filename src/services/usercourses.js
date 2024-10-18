import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const usercoursesApi = createApi({
  reducerPath: 'usercoursesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8090/',
    prepareHeaders:(headers)=>{
      console.log("headers",headers)
      headers.set("authorization",window.localStorage.getItem('token'))
      return headers
    }
  }),
  endpoints: (builder) => ({

    getAllUserCourse: builder.query({
      query: () => `/purchasedcourses`,
    }),

    getUserApprovedCourses: builder.query({
       query: () => '/approvedcourses'
    }),

    userPurchasedCourses:builder.mutation({
        query:({course,cid})=>{
            return {
                url:`/purchasecourse/${cid}`,
                method:'POST',
                body:course,
            }
        }
    }),

    getAllUsersapprovalpendingCourses:builder.query({
       query: () => '/approvalpending'
    }),

    updateUserCourse:builder.mutation({
      query:({user,course})=>{
          return {
              url:`/approvecourse/${user.uid}/${course.cid}`,
              method:'PUT',
              body:user,
          }
      }
    }),

    getAllAdminApprovedCourses:builder.query({
       query:()=> '/adminapprovedcourses'
    })


  }),
})


export const {useGetAllUserCourseQuery, useGetUserApprovedCoursesQuery, useUserPurchasedCoursesMutation, useGetAllUsersapprovalpendingCoursesQuery, useLazyGetAllUsersapprovalpendingCoursesQuery, useGetAllAdminApprovedCoursesQuery, useUpdateUserCourseMutation } = usercoursesApi