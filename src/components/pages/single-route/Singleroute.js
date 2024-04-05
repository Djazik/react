import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { API_URL } from '../../static'
import "./style.css"
import { useFetch } from '../../hooks/useFatch'

function Singleroute() {
  const {id} = useParams()
  const {data:product,loading} = useFetch(`${API_URL}/products/${id}`)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h2>Singleroute</h2>
      <img width={300} src={product?.data?.image} alt="" />
      {/* <h2>{product?.title}</h2>
      <h2> {product?.price} USD</h2> */}
    </div>
  )
}

export default Singleroute