import React, { useState } from 'react'
//import B from './B'
// import C from './C'
//import A from '../../localstate/useState/A'
import B from '../../localstate/useState/B'

function D() {
  let [D,setD]=useState(99)
  return (
    <div> A 
      <B/>
     {/* <B value={D}/>
      { <C value={D}/>*/}
    
    </div>
  )
}

export default D
