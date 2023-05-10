import React from 'react'

function MenuItems(props) {
  return (
    <div className="menuItem">
    <div style={{backgroundImage:`url(${props.image})`}}> </div> 
         
       
        <h2>{props.name}</h2>
        <p> ₹{props.price} </p>
      
     </div>
  )
}

export default MenuItems 