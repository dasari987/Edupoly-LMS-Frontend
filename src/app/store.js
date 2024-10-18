import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coursesApi } from '../services/courses'
import { authApi } from '../services/authentication'
import userReducer from '../features/auth/userSlice'
import { usercoursesApi } from '../services/usercourses'



export const store = configureStore({
  reducer: {
      user:userReducer,
      [coursesApi.reducerPath]: coursesApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [usercoursesApi.reducerPath]: usercoursesApi.reducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware,authApi.middleware,usercoursesApi.middleware),
})


setupListeners(store.dispatch)