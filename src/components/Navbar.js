import React, { useState } from 'react'
import Logo from '../assets/logo2.jpg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

const [openLinks, setOpenLinks] = useState(false);

const buttonFun=()=>{
setOpenLinks(!openLinks)

}


return (

    <div className='navbar'>
        <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='#' ></img> 
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About </Link>
        <Link to="/ad">Contact</Link>

        </div>
        
        </div>

        <div className='rightSide'>
        <Link to='./'>Home</Link>
        <Link to='./menu'>Menu</Link>
        <Link to='./about'>About </Link>
        <Link to='./contact'>Contact</Link>
        <button onClick={buttonFun}>
          <ReorderIcon/>

        </button>
        </div>
      

    </div>
  )
}

export default Navbar