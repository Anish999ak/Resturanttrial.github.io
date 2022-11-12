import React from 'react'
import './Style.css'
const Manucard = ({menuData}) => {
  return (
    <>
         <div className='card-container'>
            {
                menuData.map((curele)=>{
                  const {id,name,category,image,description} = curele
                 return(
                    <div className='main-card' key={id}>
                    <div className='card'>
                    <span className='card-num' id='num'>{id}</span>
                    <span className='author'>{category}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description'>{description}</span>
                    <div className='read'>
                     READ
                    </div>
                     <img src={image} ></img>
                     <span className='card-tag'>Order Now</span>
                   </div> 
                   </div>
                 )
                })
            }
        </div>
    </>
  )
}

export default Manucard