import React from 'react'

function A() {
    const name="Mohan"
    const age=25
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Today:{new Date().toDateString()}</h1>
    </div>
  )
}

export default A
