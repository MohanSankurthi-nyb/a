import React, { useEffect, useState } from 'react'

function A(props) {
    let [data,setData]=useState([])
    let [errors,setErrors]=useState("")
    let fetchdata=()=>{
        fetch(props)
    .then((d)=>d.json)
    .then((d)=>setData(d))
    .catch((e)=>
        setErrors(e))
    }

    useEffect(()=>{
        fetchdata()
    },[])
  return{data,e}
}

export default A
