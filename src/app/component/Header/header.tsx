import React from 'react'
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaRegCircleUser, FaRegMoon } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { FiMenu } from 'react-icons/fi';
import './header.css'
const Header =()=>{
    return(
<header className="header_c">
<div className="container">
  <div className="area_logo_header_c">
   
    <p className="copy">BusinessBook Plus &nbsp;<div style={{color:"black"}}><FiMenu /></div></p>
  </div>
  <nav className="area_nav_header_c">
  
    <ul className="list_nav_ico_header">
      <li className="search"><a href=""><FaCompressArrowsAlt />
</a></li>
      <li className="favorite"><a href=""><FaRegMoon />
</a></li>
      <li className="cart"><a href=""><TiPlus /></a>
</li>
      <li className="search"><a href=""><MdSettings /></a>
</li>
      <li className="favorite"><a href=""><FaRegCircleUser />
</a></li>
    </ul>
  </nav>
</div>
</header>
    )
}
export default Header;