import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

let m =10 
function Parent() {
   let [data,setData]=useState(10)
    function hai(k){
        setData(k)
    }
    console.log(m)
  return (
    <div>
      <Child1 j={data}/>
      <Child2 n={hai}/>
    </div>
  )
}

export default Parent
