import React,{useState} from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { RemoveTodo , CheckTodo, UpdateTodo } from '../redux/Actions'

export default function TodoList() {
    const dispatch=useDispatch()

    const todos=useSelector((state)=>state) ; 

    const [show,setShow]=useState({show:false , indx:-1})

    const [newTodo , setNewTodo]=useState({
      id: '',
    description: '',
    checked: false
    }) ; 

    const handleInputChange = (event) => {
      setNewTodo({...newTodo,description: event.target.value
    });
    };
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      dispatch(UpdateTodo({ 
        id: newTodo.id, 
        description: 
        newTodo.description, 
        checked: newTodo.checked 
      }));
      setNewTodo({
        id: '',
        description: '',
        checked: false
      });
    }

    const handleUpdateClick = (id) => {
      setNewTodo({
        ...newTodo,
        id: id
      });
    };

  return (
    <div className='bg-blue-200 w-96 rounded-md overflow-hidden my-5'>
      <h1 className='bg-indigo-300 text-white text-4xl font-sans font-bold tracking-tight p-5'>To Do List</h1>
        {todos.map(e=>(
            <div className='m-3 ' key={e.id} >

                <div className='grid whitespace-nowrap grid-cols-2'>
                  
                <p className='truncate' style={{textDecoration:e.checked?"line-through" : "none" ,}}>{e.description}</p>

                  <div className=''>
                      <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md m-1 " onClick={()=>dispatch(RemoveTodo(e.id))}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>  
                      </button>

                      <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md m-1" onClick={()=>dispatch(CheckTodo(e.id))}>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                          </svg>
                      </button>

                      <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md m-1" onClick={()=>{ setShow(prev=>{return{show:!prev.show , indx:e.id}}) }}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd"
                              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                              clip-rule="evenodd" />
                      </svg>
                      </button>
                  </div>

                </div>

                {show.show&&show.indx==e.id ? <form className='grid grid-cols-4' onSubmit={handleSubmit}>
                  <input className="col-span-3 block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Update TO DO..." value={newTodo.description} onChange={handleInputChange}  type='text'/>
                  <button  type='submit' onClick={() => handleUpdateClick(e.id)} className="col-span-1 px-4 text-white bg-purple-600 border-l rounded ">
                    Update
                </button>
                  </form> : <></>}
            </div>
        ))}
    </div>
  )
}


