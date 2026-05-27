import React from 'react'
import E from './E'
import F from './F'

function C({value}) {
  console.log(value)
  return (
    <div>C
      <E value={value}/>
      <F value={value}/>
    </div>
  )
}

export default C
