"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desk, setdesk] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitform = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desk }]);
    settitle("")
    setdesk("")
    console.log(mainTask)
  }

  const deletetask=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }

  let renderTask = <h2>NO TASK AVAILABLE</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) => {
      return (
        <li  key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl text-bold'>{t.title}</h5>
            <h6 className='text-xl text-bold'>{t.desk}</h6>
          </div>
          <button 
          onClick={()=>{
            deletetask(i)
          }} className='bg-red-600 text-white border-2 rounded-sm px-4 py-2 font-bold'>DELETE</button>
        </li>
      );
    });
  
  }
  return (
    <>

      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Mayur's Todo list </h1>

      <form onSubmit={submitform}>
        <input type="text" className='text-2xl border-2 rounded	 border-black border-r m-8 px-4 py-3' placeholder='Enter Task Here' value={title} onChange={(e) => {
          settitle(e.target.value)
        }} />

        <input type="text" className='text-2xl border-2 rounded	 border-black border-r m-8 px-4 py-3' placeholder='Enter Discription Here' value={desk} onChange={(e) => {
          setdesk(e.target.value)
        }} />
        <button className='bg-black text-white border-2 rounded p-3 '> ADD TASK</button>

      </form>

      <hr />
      <div className='p-8 bg-slate-300'>
        <ul>{renderTask}</ul>
      </div>

    </>
  )
}

export default page
