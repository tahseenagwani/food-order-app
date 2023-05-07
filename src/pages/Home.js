import React from 'react'
import Banner from '../assets/homeBackground.jpg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${Banner})`}}> 
    
    <div className='headerContainer'>
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <Link to>   
        <button>Order Now</button>
        </Link>

    
    </div>

    </div>

  )
}

export default Home