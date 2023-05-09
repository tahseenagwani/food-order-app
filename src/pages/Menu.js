import React from 'react'
import  {Data}  from '../datas/Datas'

function Menu() {
  return (
    <div className='menu'>
<div className="menuTitle">
    <div className="menuList">
    {Data.map((menuitems,key)=>{
            return <div>{menuitems.name}</div>


    })
    
    
    }

    </div>

</div>

    </div>
  )
}

export default Menu