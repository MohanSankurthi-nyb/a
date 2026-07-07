import React from 'react'

function D(props) {
    console.log(props)
  return (
    <div>
      <h1>This is data from C{props.Value}</h1>
    </div>
  )
}

export default D
