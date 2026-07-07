import React from 'react'
import S1 from './S1'

function S2() {
  return (
    <div>
        <h1>Student Details</h1>
        <S1 
        name="mohan"
        age={22}
        course="React"
        />
        <S1 
        name="navya"
        age={20}
        course="Java"
        />

    </div>
  )
}

export default S2
