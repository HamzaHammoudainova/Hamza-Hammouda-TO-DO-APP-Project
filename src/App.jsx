import React from 'react'
import Add from './Components/AddTodo'
import TodoList from './Components/TodoList'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-400 to-violet-700 bg-contain min-h-screen grid justify-center'>
        <h1 className='top-0 left-0 absolute text-white font-medium text-2xl p-6 bg-blue-200 hover:bg-blue-900'>Hamza Hammouda <span className='text-purple-700'>TO DO APP </span> Project</h1>
        <Add/>
      <div className='grid h-screen ' >
        <TodoList/>
      </div>
    </div>
  ) 
}


// add todo
// remove todo 
// check todo 
// update todo