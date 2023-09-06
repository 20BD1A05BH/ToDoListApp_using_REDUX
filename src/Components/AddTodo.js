import { faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useForm} from 'react-hook-form'
import { addTodoNew } from "../slices/todoSlice"
import { useDispatch } from "react-redux"

function AddToDo() {
    const {register,handleSubmit,formState:{errors}}=useForm()

    const dispath=useDispatch();

    //form submit
    const onFormSubmit=(todoObj)=>{
      // console.log(todoObj)
      // console.log(todoObj.todo)

      // invoke/call action creator function addtodoNew
      let actionObject=addTodoNew(todoObj.todo)
      // console.log("action obj is ",actionObject)
      
      //dispath actionObj to store
      dispath(actionObject)
    }


  return (
    <div className="row row-11 row-sm-10 row-md-7 border-end border-5 p-3">
      <p className="display-4 text-center text-light bg-dark headings">
       <FontAwesomeIcon icon={faReact} className="text-success" /> New Todo</p>
      <hr />
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3">
                <label htmlFor="todo">Enter a Task</label>
                <input type="text" id="todo" className="form-control" {...register("todo",{required:true})}></input>
                {/* validation error message for todo */}
                {errors.todo?.type==='required' && <p className="text-danger">*Task is required</p>}
            </div>
            <button className="btn btn-secondary w-50" type="submit">Add ToDo</button>
        </form>
    </div>
  )
}

export default AddToDo