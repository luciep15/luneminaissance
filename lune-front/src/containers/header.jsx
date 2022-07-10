
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { useSelector } from "react-redux";
import { selectUser , setUser } from "../slices/userSlice";


const Header =(props)=>{
 
const user = useSelector(selectUser);

console.log(user)


const toggle=()=> {
  const hamburger = document.querySelector(".hamburger-lines")
  const navMenu = document.querySelector(".menu-items")

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})
}

const togglelink = ()=>{
  const hamburger = document.querySelector(".hamburger-lines")
  const navMenu = document.querySelector(".menu-items")

  document.querySelectorAll(".linkMenu").forEach(n=>n.addEventListener("click", ()=>{
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))
}

  	return (
   		 <div className="header">
   		     <nav>
      		 <div className = "navbar">
                  <div className="container nav-container">
                      <div className="hamburger-lines"  
                      onClick={()=>{
					            toggle()}}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                      </div>  
                    <div className="logo">
                     	<Link to="/"><img src={logo} alt="logo"/><h1>Mieux-Etre Holistique</h1></Link>
                    </div>
                    <div className="menu-items"
                    onClick={()=>{
					            togglelink()}}>
                          	{user.isLogged && <div className="menu_deroulant">
                           	<Link to="/profil" className="linkMenu" id="user">{user.infos.firstName}</Link>
                     				<Link to="/logout" className="linkMenu">Déconnexion</Link>
                      			<Link to="/admin" className="linkMenu">Admin</Link>
                  						</div>}
                       	
                          	<nav className="navigation">
                          	
                              <Link to="/reflexologie" className="linkMenu">Reflexologie plantaire et palmaire</Link>
                              <Link to="/soins" className="linkMenu">Soins Energetiques</Link>
                              <Link to="/tarif" className="linkMenu">Tarifs</Link>
                              <Link to="/poeme" className="linkMenu">Poemes meditatifs</Link>
                           
                           </nav>
    
                      	</div>
                     </div>	
                </div>
           		</nav>
           
             <div className="menu_web">
                 <nav className="connect">
                      	<div className="menu">
                      	 <div className="logo1">
                          	<Link to="/"><img src={logo} alt="logo"/><h1>Mieux-Etre Holistique</h1></Link>
                         </div>
                          		{user.isLogged && <div className="deroulant">
                           	<Link to="/profil" className="linkMenu" id="user">{user.infos.firstName}</Link>
                     				<Link to="/logout" className="linkMenu">Déconnexion</Link>
                      			<Link to="/admin" className="linkMenu">Admin</Link>
                  						</div>}
                       	</div>
                 	</nav>
                	<nav className="navigation">
                    <Link to="/reflexologie" className="linkMenu">Reflexologie plantaire et palmaire</Link>
                    <Link to="/soins" className="linkMenu">Soins Energetiques</Link>
                    <Link to="/tarif" className="linkMenu">Tarifs</Link>
                    <Link to="/poeme" className="linkMenu">Poemes meditatifs</Link>
                 </nav>
            </div> 
      </div>
       
      )

}
 	
export default Header;


