import React, { useState } from 'react'
import Y from './Y'
import Z from './Z'

function X() {
    const [message,setMessage]=useState("Hello")
  return (
    <div>
        <h2>Parent Component</h2>
      <Y message={message}/>
      <Z setMessage={setMessage}/>
    </div>
  )
}

export default X
