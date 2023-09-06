import {  faCircleCheck, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import todoimg from '../images/svgimg1.svg'
import { useSelector } from 'react-redux'

function TodoList() {
  let todoList=useSelector(state=>state.todo)
  // console.log("todo List is ",todoList)
  return (
    <div className="border-end border-5 p-3">
      <p className="display-5 text-center text-light list-item1 bg-dark">
        <FontAwesomeIcon icon={faTasks} className='text-danger' size='xs' />List of Todos</p>
      <hr />
      
      <img src={todoimg} className='w-50 mx-auto' alt=''></img>

      {/* if no todos existed, it should render "no tasks" */}
      {todoList.length===0 && <p className='display-6 text-danger' >No tasks found</p>}

      {
        todoList.map((todoTask,index)=><h3 className='text-warning' key={index}><FontAwesomeIcon icon={faCircleCheck} className='text-danger' size='xs' />{todoTask}</h3>)
      }

    </div>
  )
}

export default TodoList