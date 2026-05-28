import React, { useEffect, useState } from 'react'

function A() {
   let[a,seta] =useState([])
   
   useEffect(()=>{
    console.log(a)
   },[a])

    useEffect(()=>{
        console.log("hello")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((d)=>d.json())
        .then((d)=>
              //console.log(d)
        seta(d)
           // console.log(Array.isArray(d))
        )
    },[]) //[]-> Dependency array
    console.log(a[1])
    //console.log(a[0].title)
  return (
    <div key ={B.id}>A {/*{a}*/}
     {/*<h1>{a[1]?.title}</h1>
     <h3>{a[1]?.id}</h3>
    <h4> {a[1]?.userId}</h4>
    */}

    {/*map*/}
    {a.map((b)=>{
      return(
      <div>
        <h1>{b.title}</h1>
       <h1>{b.id}</h1>
       <h1>{b.userId}</h1> 
      </div>)
    })}

      <button onClick={()=>seta(a+1)}>change</button>
    </div>
  )
}

export default A
