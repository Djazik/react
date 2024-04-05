import React, {memo, useState} from 'react'
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { API_URL } from '../../../static';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../navbar/Navbar'
import "./style.css"


function Login() {
    const [ShowPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("mor_2314")
    const [password, setPassword] = useState("83r5^_")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e)=> {
        e.preventDefault()
        setLoading(true)
        if(!username.trim() || !password.trim()){
            return toast.warn("Malumotni to'liq kiriting")
        }
        let user = {username, password}
        axios 
            .post(`${API_URL}/auth/login`, user)
            .then(res => {
                console.log("response >>>", res)
                toast.success("Welcome")
                localStorage.setItem("token", res.data.token)
                navigate("/admin")
            })
            .catch(err => {
                console.log("error >>>", err)
                toast.error("Username or Password is incorrect")
            })
            .finally(()=> setLoading(false))
    }
  return (
    <div>
        <Navbar/>
        <form className='container' onSubmit={handleSubmit}>
            <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
           <div className="">
            <input required value={password} onChange={(e) => setPassword(e.target.value)} type={ShowPassword ? "text" : "password"} />
           {
                password && 
                <button type='button' onClick={()=> setShowPassword(p => !p)} >
              {ShowPassword ? <FaEyeSlash/> : <FaRegEye/> }  
                </button>
            }
           </div>
            <button disabled={loading}>{loading ? "Loading..." : "Login"}</button>
           
        </form>
    </div>
  )
}

export default memo(Login)