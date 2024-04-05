import React, {memo} from 'react'
import "./style.css"
import Navbar from '../../navbar/Navbar'
import Product from '../../products/Product'

function Home() {
  return (
    <div>Home
      <Navbar/>
      <Product/>
    </div>
  )
}

export default memo(Home)