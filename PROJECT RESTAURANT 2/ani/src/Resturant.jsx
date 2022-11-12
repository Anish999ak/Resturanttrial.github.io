import React,{useState} from 'react'
import './Style.css'
import  Menu from'./Mainapi'
import Manucard from './Manucard'
import Navbar from './Navbar'
const updatedList = [...new Set(Menu.map((curele)=>{
  return curele.category
})),'All']
console.log(updatedList)
const Resturant = () => {
    const [menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList] = useState(updatedList)
    const filterItem = (category) =>{
      if(category === 'All'){
        setMenuData(Menu);
        return;
      }
        const updatedList = Menu.filter((curele)=>{
            return curele.category === category;
        })
        setMenuData(updatedList)
    }
  return (
    <>
      <Navbar menuList={menuList} filterItem={filterItem}/>  
      <Manucard menuData={menuData}/> 
    </>
  )
}

export default Resturant