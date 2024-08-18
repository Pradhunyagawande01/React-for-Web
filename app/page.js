
import { Input } from 'postcss'
import React from 'react'

const page = () => {
  return (
    <>
    
    <h1 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center px-3 text-black text-2xl font-bold h-25 py-2 w-full gradient-red ">
      Welcome To My Todo Application
      </h1>
      <form>
          <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Your Task"
          />

           <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Discription"
          />
          <button className="bg-black text-white m-5 px-4 py-3 text-2xl font-bold rounded ">Add Task</button>
      </form>

    </>
  )
}

export default page


