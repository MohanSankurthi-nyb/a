import React, { useEffect } from 'react'

function Signup() {
  function hello(){
          console.log("Function called")
          fetch("")
          .then(()=>{})
          .then(()=>{})
  }
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
