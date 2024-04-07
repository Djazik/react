import React, {memo} from 'react'
import "./style.css"
import Navbar from '../../navbar/Navbar'
import Product from '../../products/Product'
import Banner from '../../banner/Banner'
import Featured from '../../featured/Featured'
import Bannertwo from '../../banner2/Bannertwo'
import Bannerthree from '../../banner3/Bannerthree'
import Best from '../../best/Best'
import Footer from '../../footer/Footer'

function Home() {
  return (
    <div>Home
      <Navbar/>
      <Banner/>
      <Featured/>
      <Bannertwo/>
      <Product/>
      <Bannerthree/>
      <Best/>
      <Footer/>
    </div>
  )
}

export default memo(Home)