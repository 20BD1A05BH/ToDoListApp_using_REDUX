import { createSlice } from "@reduxjs/toolkit"; 

//create a slice , here todos is name of the state-slice
export const todoListSlice=createSlice({
    name:'todos',
    initialState:[],
    // creating reducers , here in line 9 state means the initialState it takes
    reducers:{
        addTodoNew:(state,action)=>{
            // add new todo to initial state
            state.push(action.payload)
        }
    }
})

//create action creator functions
export const {addTodoNew} = todoListSlice.actions

// export reducer
export default todoListSlice.reducer