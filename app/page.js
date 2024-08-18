
'use client'

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("") 
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) =>{
e.preventDefault()
console.log(title)
console.log(desc)
settitle("")
setdesc("")
  }

  let renderTask = <h2>No Task Available</h2>

  return (
    <>
      <h1 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center px-3 text-black text-2xl font-bold h-25 py-2 w-full gradient-red ">
          Welcome To My Todo Application
      </h1>
      <form onSubmit={submitHandler} className="bg-blue-300">
          <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Your Title"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}
          />

           <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Discription"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value);
          }}
          />
          <button className="bg-black text-white m-5 px-4 py-3 text-2xl font-bold rounded ">Add Task</button>
      </form>
      <hr/>
         <div className="p-8 bg-slate-500 ">
            <ul>
              {renderTask}
            </ul>
          </div> 
    </>
  )
}

export default page


