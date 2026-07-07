import React from 'react'
import D from './D'
import E from './E'

function C() {
    let a =10
  return (
    <div>
      <h1>Value in a : {a}</h1>
      <D Value={a}/>
      <E Value={a}/>
    </div>
  )
}

export default C
