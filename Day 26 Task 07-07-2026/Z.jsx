import React from 'react'

function Z(setMessage) {
  return (
    <div>
      <h3>Child B</h3>
      <button onClick={()=> setMessage("Message updated by Child B")}>
        </button>
    </div>
  )
}

export default Z
