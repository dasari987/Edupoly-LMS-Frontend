import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://lmsbackend-qx8v.onrender.com/',
    prepareHeaders:(headers)=>{
      headers.set("authorization",window.localStorage.getItem('token'))
      return headers
    }
  }),
  endpoints: (builder) => ({

    getAllCourses: builder.query({
      query: () => ``,
    }),

    getOnecoursedet: builder.query({
      query: () => `/coursedetails`,
    }),

    courseadding: builder.mutation({
      query:(course)=>{
        return {
          url: `/addnewcourse`,
          method: 'POST',
          body:course
        }
      },
    }),

    courseupdating: builder.mutation({
      query:(course)=>{
        return {
          url: `/updatecourse`,
          method: 'PUT',
          body:course
        }
      },
    }),

  }),
})


export const { useGetAllCoursesQuery, useGetOnecoursedetQuery, useCourseaddingMutation, useCourseupdatingMutation } = coursesApi