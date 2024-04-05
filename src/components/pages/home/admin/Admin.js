import React, {memo} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./style.css"
import Navbar from '../../../navbar/Navbar'

function Admin() {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
  return (
    <div>
      <Navbar/>
        <h2>Admin</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default memo(Admin)