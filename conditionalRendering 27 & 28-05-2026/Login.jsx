import React, { useEffect, useState } from 'react'

function Login({value}) {
  let [a,seta]=useState("")
  useEffect(()=>{
    console.log("Login")
  },[])
  useEffect(()=>{
    console.log(a)
  },[a])

  let handlesubmit=(e)=>{
    e.preventDefault()
    seta("")
    value()
    console.log("Login button clicked")
    console.log(e)
    //e.preventDefault()
   // value()

    //api call post method(userid password)
    //success 
    //failure
    //true->profile page
    //false->login page
  }
  let handlechange=(e)=>{
    console.log("handle change called")
    seta(e.target.value)

  } 
  return (
    <div>
      <h1>Login</h1>
      {a}
      <input type='text' onChange={handlechange}/>
      <form onSubmit={handlesubmit} > 
      
      </form>
      <button onClick={handlesubmit}>click this</button>
    </div> 
  )
}

export default Login
