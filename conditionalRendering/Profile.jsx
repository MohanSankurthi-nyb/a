import React, { useState } from 'react'

function Profile() {
    let[status,setstatus]=useState("new")
    let[logIn,setLogin]=useState("FALSE")
  return (
    <div>
      <div>Profile
      <h1>Welcome user</h1>
    </div>
    {logIn?<h1>Profile</h1> : <h1>Login</h1>}
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
