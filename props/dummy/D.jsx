import React, { useState } from 'react'
import G from './G'
import H from './H'

function D({value}) {

  return (
    <div>D
      <h1>value in D{value}</h1>
     <G value={value}/>
     <H value={value}/> 
    </div>
  )
}

export default D
