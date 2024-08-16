'use client'

import React, { useState } from 'react'

const page = () => {
    const [marks, setMarks] = useState(100)
  return (
    <div>
        <h1>My marks is {marks}</h1>
      <button onClick ={
            () => {
                setMarks(78)
            }
      }>Click</button>
    </div>
  )
}

export default page
