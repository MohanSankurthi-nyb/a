import React from 'react'
import B from './B'
import C from './C'

function A() {
    let a=10
    function hai(k){
        console.log(k)
    }
    hai(1)
  return (
    <div>
      <h1>Value in a : {a}</h1>
      <B Value={a}/>
      <C Value={hai}/>
    </div>
  )
}

export default A
//A is parent component
//B and C are child components of A
