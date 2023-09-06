import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUserNew:(state,action)=>{
            state.push((action.payload))
        }
    }
})

//create and export action creator function
export const {addUserNew}=userSlice.actions
// export reducer of userSlice
export default userSlice.reducer