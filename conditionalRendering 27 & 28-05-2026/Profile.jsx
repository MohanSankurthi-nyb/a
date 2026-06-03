import React, { useEffect, useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Profile() {
    useEffect(()=>{
         console.log("Profile Page")
    },[])
    let[status,setstatus]=useState("new")
    let[logIn,setLogin]=useState(false)
    let[exist,setExist]=useState(true)
    let changeLogin=()=>{
        setLogin(true)
    }
  return (
    <div>
      <div>
      {/*<h1>Welcome user</h1>*/}
    </div>
    { exist && <h1>Hai</h1>}
    {logIn && <h1>Hello</h1>}
   
    {logIn?(<div>
        <h1>Profile</h1>
        
        </div>) : exist? (<Login value={changeLogin}/>) : <Signup/>}
        

    {
        logIn ? <button onClick={()=>setLogin(false)}>Logout</button>:
        exist ? <div>
        <p>
            if you are a new user click
        </p>
        <button onMouseEnter={()=>setExist(false)}>Signup</button>
    </div> :  <div>
        <p>
            if you are a existing user click the button
        </p>
        <button onClick={()=>setExist(true)}>Login</button>
    </div>

    }
    

   
    
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