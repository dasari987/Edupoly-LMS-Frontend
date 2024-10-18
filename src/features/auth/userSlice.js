import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    loginStatus:window.localStorage.getItem('token')?true:false,
    role:window.localStorage.getItem('role')?window.localStorage.getItem('role'):""
}
export const userSlice = createSlice({
    name:'UserDetails',
    initialState,
    reducers:{
        setLoginStatus:(state,action)=>{
            state.loginStatus=true
            state.role = action.payload.role
        },
        logout:(state,action)=>{
            window.localStorage.clear();
            state.loginStatus=false;
            state.role=""
            
        }

    }
})
const userReducer = userSlice.reducer;
export const {setLoginStatus,logout} = userSlice.actions;
export default userReducer;