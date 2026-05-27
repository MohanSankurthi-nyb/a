import React from 'react'

function Login({value}) {
  console.log(value)
  let handlesubmit=(e)=>{
    e.preventDefault()
    value()

    //api call post method(userid password)
    //success 
    //failure
    //true->profile page
    //false->login page
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        .....
      </form>
      <button type="submit">Login</button>
    </div>
  )
}

export default Login
