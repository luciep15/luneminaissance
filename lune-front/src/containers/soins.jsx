import React, { useState, useEffect } from "react";
import image_reiki from '../assets/images/reiki.jpg'

const Soins = (props)=>{
 
  
  return (
      <div>
        <h2 className="h2">Soins Énergétiques</h2>
        <img src={image_reiki} alt="reflexologie" className="photo_soins"/>
           
       
            <p className="pres_reflexologie"><strong>Les soins énergétiques</strong> sont basés sur mon apprentissage en <strong> magnétisme </strong> et en <strong>Reiki</strong>.
            Ils sont adaptés au besoin de la personne à l’instant T.
            Ils permettent de <strong>rétablir l’harmonie physique, émotionnel et mental </strong>.</p>
      
            <p className="pres_reflexologie">Lors d’une séance de soin énergétique, je procède en <strong> canalisant « l’énergie universelle » </strong>se trouvant dans <strong>l’atmosphère</strong> pour la <strong>transmettre</strong> au receveur <strong>par imposition des mains</strong>.</p>
            <p className="pres_reflexologie"><strong>Tout le monde peut en bénéficier</strong> : enfants, adolescents, adultes, femmes enceintes, personnes âgées, personnes handicapées…,</p>
     
        <p className="pres_reflexologie"><span>Les soins énergétiques ne remplacent pas l’expertise d’un médecin et ne devront en aucun cas entrainer l’interruption d’un traitement médical en cours.</span></p>
    </div>
  );
 
}

export default Soins;
