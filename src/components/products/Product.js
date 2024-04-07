// import React, { memo, useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from '../static'
// import "./style.css";
// import { Link } from "react-router-dom";
// import { useFetch } from "../hooks/useFatch";



// function Product() {
//   const [data, setData] = useState([]);
//   const [count, setCount] = useState(4)
//   const [loading, setLoading] = useState(false)
//   const [categories, setCategories] = useState([])
//   const [categoriesValue, setCategoriesValue] = useState("all")

//   // const {data:categories} = useFetch(`${API_URL}/products/categories`)
//   // const {data,loading} = useFetch(`${API_URL}/products`)   


//   useEffect(()=> {
//     axios
//     .get(`${API_URL}/products/categories`)
//     .then(res => setCategories(res.data))
//     .catch(err => console.log(err))
// },[])

// useEffect(()=> {
//     setLoading(true)

//     axios
//         .get(`${API_URL}/products`)
//         .then(res =>{
//             setData(res.data)})
//         .catch(err => console.log(err))
//         .finally(()=> setLoading(false))
// },[count, categoriesValue])


// const getCategory = (text)=>{
//   setCategoriesValue(text)
//   setData([])
// }

//   useEffect(()=> {
//     setLoading(true)
//     let url = categoriesValue === "" ? `${API_URL}/products?limit=${count}` : `${API_URL}/products/category/${categoriesValue}?limit=${count}`

//     axios
//         .get(url)
//         .then(res => setData(res.data))
//         .catch(err => console.log(err))
//         .finally(()=> setLoading(false))
//   },[count, categoriesValue])

//   let products = data?.map(({id, image, title, price}) => (
//     <div key={id} className="card">
//       <Link to={`/product/${id}`}>
//       <img src={image} alt="" />
//       </Link>
//       <h2>{title}</h2>
//       <h2> {price} USD</h2>
//     </div>
//   ));

//   let categoryItems = categories?.map((el, inx) => <option key={inx} value={el}>{el}</option>)
//   // let categoryItems = categories?.data?.map((el, inx) => <li onClick={()=> getCategory(el)} key={inx} >{el}</li>)
//   return (
//     <div>
//       <select onChange={e => setCategoriesValue(e.target.value)} name="" id="">
//         <option value="">All</option>
//         { categoryItems }
//       </select>
//       <ul className="container">
//         <li onClick={()=> getCategory("all")} >ALL</li>
//         {categoryItems}
//       </ul>
//       {loading && <h2>Loading...</h2>}
//       <div className="wrapper container">{products}</div>
//       <button onClick={()=> setCount(p => p + 4)} className="btn-see">See more</button>
//     </div>
//   );
// }

// export default memo(Product);



import React, { useEffect, useState } from "react";
import { PRODUCT_ITEMS } from "../static/index";
import "./style.css"
import rating from "../../accents/img/rating.svg";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from '../static'



function Product() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [categoriesValue, setCategoriesValue] = useState("")

  useEffect(()=> {
        axios
        .get(`${API_URL}/products/categories`)
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    },[])

  useEffect(()=> {
      setLoading(true)
      let url = categoriesValue === "" ? 
                                `${API_URL}/products/?limit=${count}` :
                                `${API_URL}/products/category/${categoriesValue}?limit=${count}`
    axios
          .get(url)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err))
          .finally(()=> setLoading(false))
  }, [count,categoriesValue])
  if (!data) {
    return <div>Loading...</div>;
  }


  let products = data?.map((el) => (
    <div key={el.id} className="product-card">
      <div className="card-img">
        <Link to={`/product/${el.id}`}>
          <div className="pod_img">
          <img src={el.image} alt="" />
          </div>
        </Link>
      </div>
      <div className="card-info">
        <p>{el.category}</p>
        <h1>{el.title}</h1>
        <div className="card-rating">
          <img src={rating} alt="" />
          <p>({el.rating.rate})</p>
        </div>
        <p>
          By <span>NestFood</span>
        </p>
        <div className="card-bottom">
          <div className="card-price">
            <h2>{el.price}</h2>
            <h3>$32.8</h3>
          </div>
          <button>
            <IoCartOutline /> Add
          </button>
        </div>
      </div>
    </div>
  ));

  // useEffect(()=> {
    
  // },[])
  let categoryItems = categories?.map((el,inx)=> <li onClick={()=> setCategoriesValue(el)} key={inx} >{el}</li>)

  return (
    <section className="product">
      <div className="container">
        <div className="product-top">
          <h1>Popular Products</h1>
          <ul className="product-list">
           
            
              <li className="product-item">All</li>
              {categoryItems}
            
           
          </ul>
        </div>
        {loading && <h2>Loading...</h2>}
        <div className="product-bottom">
          <div className="product-wrapper">{products}</div>
          <div className="product-btn">
            <button
              disabled={count === 20}
              onClick={() => setCount((p) => p + 5)}
              className="btn-see"
            >
              Add card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
