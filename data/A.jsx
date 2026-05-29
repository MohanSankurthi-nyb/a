import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Dec, Inc } from '../globalstate/toolkit/reducer'


function A() {
    let d=useSelector((state)=>{
        return state.count.value
    })
    let dispatch= useDispatch()
    console.log(d)

  return (
    <div>A
      <h1>{d}</h1>
      <button onClick={()=>dispatch(Inc())}>Increase</button>
      <button onClick={()=>dispatch(Dec())}>Decrease</button>
    </div>
  )
}

export default A
