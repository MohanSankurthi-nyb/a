import React, { createContext, useState }  from 'react'
import B from './B'
import C from './C'
import { useDispatch, useSelector } from 'react-redux'
//import { store } from '../Redux/App'

export let context=createContext()
function A() {
  let data = useSelector((state)=>{
    return state
  })
  let d=useDispatch()
  console.log(d)
  console.log(data)
  let [a,seta]=useState(100)
  return (
    <div>A
      <h1>data:{data.sum}</h1>
      <button onClick={()=>{d({type:"a"})}}>
        Inc
      </button>
      <button onClick={()=>{d({type:"b"})}}>
        Dec
      </button>
      <context.Provider value={{a,seta}}>
        <B/>
        <C/>
      </context.Provider>
      
    </div>
  )
}

export default A
