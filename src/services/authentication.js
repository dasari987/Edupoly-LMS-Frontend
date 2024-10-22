import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://lmsbackend-qx8v.onrender.com/',
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