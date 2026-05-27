import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Profile() {
    let[status,setstatus]=useState("new")
    let[logIn,setLogin]=useState(false)
    let[exist,setExist]=useState(true)
  return (
    <div>
      <div>
      {/*<h1>Welcome user</h1>*/}
    </div>
    {logIn?<h1>Profile</h1> : exist? <Login/> : <Signup/>}
    <div>
        <p>
            if you are a new user click
        </p>
        <button onClick={()=>setExist(false)}>Signup</button>
    </div>

    <div>
        <p>
            if you are a existing user click 
        </p>
        <button onClick={()=>setExist(false)}>Login</button>
    </div>
    
   {/* <div>
        <h1>login page</h1>
    </div>
    <div>
        <h1>signup</h1>
    </div>*/}
    </div>
  )
}

export default Profile

{/*>Signup
-registration details
-signup button
-if existing user then  click on login

>Login
-login details
-login button
-if you are a new user ? click on signup


>Profile
-Profile
*/}