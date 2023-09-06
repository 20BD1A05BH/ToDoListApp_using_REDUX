import React from 'react'
import { useSelector } from 'react-redux';

function TodoCount() {

  let todolist=useSelector(state=>state.todo)

  // console.log("todolist in count component is ",todolist)
  return (
    <div>
      <p className='display-4 text-center' style={{color:'#070A52'}}>Todo count</p>
      <hr />
      <h1 className='text-center'>{todolist.length}</h1>
    </div>
  )
}

export default TodoCount