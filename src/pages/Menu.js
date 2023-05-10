import React from 'react'
import  {Data}  from '../datas/Datas'
import MenuItems from '../components/MenuItems'
import '../styles/Menu.css'
function Menu() {
  return (
    <div className="menu">
<h1 className="menuTitle">Our Menu</h1>
    <div className="menuList">
    {Data.map((menuitems,key)=>{
            return (
            <MenuItems  
              key={key} 
              image={menuitems.image} 
              price={menuitems.price} 
              name={menuitems.name} />);


    })
    
    
    }

    </div>

</div>

  
  )
}

export default Menu