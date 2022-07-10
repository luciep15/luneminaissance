import React, { useState, useEffect } from "react";
import photo from '../assets/images/IMG_21462.png'


const Presentation = (props)=>{
 
  
  return (
      <div>
        <h2 className="h2">Présentation</h2>
        <img src={photo} alt="reflexologie" className="photo_presentation"/>
        <p className="presentation">Bonjour,</p>
        <p className="presentation">Je suis Chloé, réflexologue et praticienne en soins énergétiques.
        Après des études et un parcours en ingénierie bio-industrielle, j’ai choisi de donner un nouveau souffle à ma vie et de revenir à mes aspirations profondes : le bien-être de mon prochain.
        Ma sensibilité, mon écoute, mon envie d’aller toujours de l’avant m’ont porté à reconsidérer mon quotidien professionnel. Persuadée que chacun est doté d’une richesse intérieure qui ne demande qu’à fleurir, j’ai à cœur d’accompagner les personnes en demande afin de les aider à avancer.</p>
       
       <h3 className="h3">Formations & Formateurs</h3>
       <ul className="presentation"> 
            <li><strong>Normandie Réflexologie</strong>, avec <strong>Patricia Torossian </strong>, podologue et réflexologue  
              <br/>
              <a href="https://normandie-reflexologie.fr"><strong className="lien">https://normandie-reflexologie.fr</strong></a></li>
            <p className="pres_formation"><strong>Je suis membre de la Fédération Française des Réflexologues</strong></p>
            <li>Formation en <strong>Reiki</strong>, avec <strong>Claire Leseur </strong>
           
           <br/>
           <a href="https://claireleseur.com/"><strong className="lien">https://claireleseur.com</strong></a></li>
        </ul>
      
     
    </div>
  );
 
}

export default Presentation;
