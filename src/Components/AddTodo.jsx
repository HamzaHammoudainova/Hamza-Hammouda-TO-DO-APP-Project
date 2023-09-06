import React, { useState } from 'react'
import { AddTodo } from '../redux/Actions';
import { useDispatch } from 'react-redux';
export default function Add() {
    const dispatch=useDispatch()
    const [newTodo , setNewTodo]=useState({
      id: '',
    description: '',
    checked: false
    }) ; 

    const handleInputChange = (event) => {
      setNewTodo({...newTodo,description: event.target.value
});
    };

    const handleSubmit=(  event)=>{
        event.preventDefault();
        dispatch(AddTodo(newTodo))
        setNewTodo({
          id: Date.now(),
          description: '',
          checked: false
        });
    }

    const [description ,setDescription]=useState("") ; 

    
  return (
    
    
    
    <div className='bg-blue-200 w-96 rounded-md h-44 place-content-evenly mt-2.5' >

        <h1 className='bg-indigo-300 text-white text-4xl font-sans font-bold tracking-tight p-5'>Add New Task</h1>

        <form className='m-8' onSubmit={handleSubmit}>
        <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    value={newTodo.description}
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Add TO DO..."
                    onChange={handleInputChange}
                    
                />
                <button type='submit' className="px-4 text-white bg-purple-600 border-l rounded ">
                    ADD
                </button>
            </div>
        </div>
        </form>

    </div>
  )
}
