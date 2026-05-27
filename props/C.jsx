import React from 'react'

function C(props) {
    //console.log(props)
    let k=1000
    console.log(props.Value)
    props.Value(k)
  return (
    <div>
      <h1>This is C component</h1>
      { /*< h4>Data from A : {props.Value}</h4> */}
    </div>
  )
}

export default C
