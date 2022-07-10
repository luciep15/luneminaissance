import React from 'react';
import { Link } from "react-router-dom";
const Footer =(props)=>{

	
	return (
		<div className="footer">
			<div className="footer1">
	    	 <ul>
	           <li><Link to="/presentation"> Qui suis-je?</Link></li>
	           <li><a href=" https://mieuxetreholis.herokuapp.com/contact">contact</a></li>
	    	 </ul>
			 </div>
	         <div className="footer2">
	            <div>
	                   <a href="https://www.facebook.com/LuneMinaissante"><i className="fab fa-facebook-square"></i></a>
	                   <a href="https://www.instagram.com/luneminaissante/?hl=fr"><i className="fab fa-instagram"></i></a>
	                   <a href="https://anchor.fm/luneminaissante"><i className="fa fa-message-music"></i>Anchor</a>
	            </div>
	            <p>© 2022 Mieux-Etre Holistique - All rights Reserved</p>
	          </div>
	          
		</div>
		)
}

export default Footer;