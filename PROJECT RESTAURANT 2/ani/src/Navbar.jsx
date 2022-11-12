import React from 'react'
const Navbar = ({filterItem,menuList}) => {
  return (
    <>
    <div className='btn-group'>
        <nav className='navbar'>
            {
                menuList.map((curele)=>{
            return(
                    <>
                    <button className='btn' onClick={()=>filterItem(curele)}>{curele}</button>
                    </>

            )})
            }
      </nav>
    </div>
    </>
  )
}

export default Navbar