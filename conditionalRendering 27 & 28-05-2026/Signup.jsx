import React, { useEffect } from 'react'
import A from '../customHooks 29-05-2026/A'

function Signup() {
  function hello(){
          console.log("Function called")
          fetch("")
          .then(()=>{})
          .then(()=>{})
  }
  A()
  useEffect(()=>{
      console.log("Signup page")
    },[])
  return (
    <div>
      <h1>Signup</h1> 

    </div>
  )
}

export default Signup
