import React, { useState, useEffect } from "react";
import Iframe from 'react-iframe'
import reflexologie from '../assets/images/image_home.jpg'
const Home = (props)=>{
  
  return (
      <div>
        <img src={reflexologie} alt="reflexologie" className="image_home"/>
        <h2 className="h2">Mes services</h2>
        <p className="presentation">Je vous propose des séances de <strong>réflexologie</strong> sur <strong>les mains </strong> et <strong>les pieds
        </strong> ainsi que des  <strong>soins énergétiques </strong> à <strong className="lien_home">Grand-Couronne (76) </strong></p>
       
       <p className="presentation"> Vous hésitez sur l’accompagnement adapté à vos besoins ?
        N’hésitez pas à <a href="http://luciepecot.ide.3wa.io:9500/contact"><strong className="lien_home">me contacter</strong></a> pour toute demande d’information ou pour prendre rendez-vous en m’appelant au <a href="tel:+33666147858"><strong className="lien_home">06.66.14.78.58</strong>.</a></p>
      
       <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41585.11224765287!2d0.9747495353828342!3d49.35083282368118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e11e2bf5448901%3A0xc4a6ab00a298f406!2s76530%20Grand-Couronne!5e0!3m2!1sfr!2sfr!4v1651407907084!5m2!1sfr!2sfr"
        width="800px"
        height="350px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
       
    </div>
  );
 
}

export default Home;
