import React, {memo} from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar container'>
      
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"/admin"} >Admin</NavLink>
    </div>
  )
}

export default memo(Navbar)