import React from 'react'

import B from './B'
import C from './C'
import A from './A'

function D() {
  return (
    <div>
      <A/>
      <B
      name="Mohan"
      course="Java"
      />
      <B
      name="Navya"
      course="HTML"
      />

      <C/>
    </div>
  )
}

export default D
