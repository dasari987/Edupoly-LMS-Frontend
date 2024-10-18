import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8090/',
    // prepareHeaders:(headers)=>{
    //   console.log("headers",headers)
    //   headers.set("authorization",window.localStorage.getItem('token'))
    //   return headers
    // }
  }),
  endpoints: (builder) => ({

    useradding: builder.mutation({
        query:(user)=>{
          return {
            url: `/signup`,
            method: 'POST',
            body:user
          }
        },
    }),

   userlogin:builder.mutation({
        query:(user)=>{
            return {
                url:'/login',
                method:'POST',
                body:user,
            }
        }
   }),

  })
})


export const { useUseraddingMutation, useUserloginMutation } = authApi