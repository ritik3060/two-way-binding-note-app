import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';

const App =() => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)


   setTitle('')
   setDetails('')
   
  }
  const deleteNote =(idx) =>{
   const copyTask = [...task]
   copyTask.splice(idx,1)

   setTask(copyTask)
    
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }} 
        className='flex items-start lg:w-1/2 flex-col gap-4 p-10'>

        <h1 className='text-4xl mb-2 font-bold'>ADD Notes</h1>

        <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}
        />

        <textarea 
        type="text" 
        placeholder='Write Details'
        className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button className='bg-white active:scale-95 w-1/2 text-black  px-5  py-2 font-medium rounded'
        >Add Note</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start  h-[90%] overflow-auto gap-5 mt-5'>
          {task.map(function(elem,idx){
            return <div  key={idx}   className="flex justify-between flex-col items-start relative  h-52 w-40 rounded-xl bg-cover text-black py-6 px-8 bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')]">
              
            <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight  text-sm font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>delete note</button>
            </div>
          })}

        </div>
        
      </div>
      
    </div>
  )
}

export default App