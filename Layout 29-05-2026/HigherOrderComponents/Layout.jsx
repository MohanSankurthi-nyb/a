import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({value}) {
    console.log(value)
  return (
    <div>
        <h1>Layout</h1>
      <Header/>
      {<value/>}
         
      <Footer/> 
    </div>
  )
}

export default Layout
