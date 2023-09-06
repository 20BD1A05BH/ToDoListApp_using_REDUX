import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import userReducer from './slices/userSlice'

export const store=configureStore({
    reducer :{
        //1stslice-todoSlice
        todo:todoReducer,
        //2ndslice-userSlice
        users:userReducer
    }
})