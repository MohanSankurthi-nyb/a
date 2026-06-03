import React, { StrictMode } from 'react'
import B from './B'

function A() {
  let A=10
    let a={age:10}
    console.log(a)

    //own data -> state
    //api calls
    //parent component -> props

  return (
    <StrictMode>
     <h1> this is A component</h1>
     <h1>{a.age}</h1>
     <B/>
     <B Hello="hai"/>
    </StrictMode>
  )
}

export default A
