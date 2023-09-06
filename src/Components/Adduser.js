import React from 'react'
import { useForm } from 'react-hook-form'
import { addUserNew } from '../slices/userSlice'
import { useDispatch } from 'react-redux'
function Adduser() {

    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispath=useDispatch()

    const onFormSubmit=(userObj)=>{
        // console.log(userObj);
        //invoke/call action creator function
        let actionObj=addUserNew(userObj)//here userObj act as payload data
        //dispath action object
        dispath(actionObj)//see line 8
    }
  return (
    <div className=' mt-3 border-end border-5 p-3'>
        <p className='display-6 text-primary'>Adding new user</p>
        <hr />
        {/* form to add user */}
        <form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
            {/* name */}
            <div className='mb-3'>
                <label htmlFor='name'>Name</label>
                <input type='text' id="name" className='form-control' {...register("name",{required:true})}></input>
                {/* validation error message for name */}
                {errors.name?.type==='required' && <p className="text-danger">*Name is required</p>}
            </div>
            {/* email */}
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' id="email" className='form-control' {...register("email",{required:true})}></input>
                {/* validation error message for email */}
                {errors.email?.type==='required' && <p className="text-danger">*Email is required</p>}
            </div>
            {/* submit button */}
            <button type='submit' className='btn btn-success d-block mx-auto'>Add user</button>
        </form>
    </div>
  )
}

export default Adduser