import React, { useState } from 'react'
import Logo from '../assets/logo.avif'
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
        <img src={Logo} ></img> 
        <div className='hiddenLinks'>
        <Link to='./'>Home</Link>
        <Link to='./'>Menu</Link>
        <Link to='./'>About </Link>
        <Link to='./'>Contact</Link>

        </div>
        
        </div>

        <div className='rightSide'>
        <Link to='./'>Home</Link>
        <Link to='./'>Menu</Link>
        <Link to='./'>About </Link>
        <Link to='./'>Contact</Link>
        <button onClick={buttonFun}>
          <ReorderIcon/>

        </button>
        </div>
      

    </div>
  )
}

export default Navbar