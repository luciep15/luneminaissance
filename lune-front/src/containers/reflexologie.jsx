import React, { useState, useEffect } from "react";
import image_plantaire from '../assets/images/image2.jpg'
import image_palmaire from '../assets/images/image5.jpg'

const Reflexologie = (props)=>{
 
  
  return (
      <div>
        <h2 className="h2">Reflexologie</h2>
        
        <div className="photo_reflexologie">
            <div>
            <h3 className="reflex_h3">Reflexologie Palmaire</h3>
            <img src={image_palmaire} alt="reflexologie" className="photo_reflex"/>
            </div>
            <div>
            <h3 className="reflex_h3">Reflexologie Plantaire</h3>
            <img src={image_plantaire} alt="reflexologie" className="photo_reflex"/>
            </div>
        </div>
        <article className="article">
            <h3 className="reflex_h3">Qu’est-ce que la réflexologie plantaire et palmaire ?</h3>
            <p className="pres_reflexologie">C’est une médecine douce qui agit à la fois en douceur et en profondeur sur des zones dites « Réflexes » localisées sur les pieds et les mains et correspondants à chaque partie du corps.
    
                Elle rétablit l’équilibre de la cellule en améliorant la circulation sanguine, lymphatique et céphalorachidienne, rééquilibrant les systèmes nerveux et hormonaux.
    
                Cette technique va harmoniser la circulation dans la zone perturbée apportant une meilleure nutrition de la cellule et un nettoyage, donc une élimination aidant ainsi le corps à se guérir.</p>
       </article>
       <article className="article">
           <h3 className="reflex_h3">Pourquoi aller voir un réflexologue ?</h3>
           <ul className="pres_reflexologie"> 
                <li>Toutes les pathologies liées au stress après diagnostic médical</li>
                <li>Toutes douleurs musculaires et articulaires dorsalgies, lombalgies, torticolis, crampes, arthrose du genou et de l’épaule</li>
                <li>Troubles digestifs (maux d’estomac, constipation, ballonnement)</li>
                <li>Migraines, insomnies</li>
                <li>Troubles respiratoires (rhume, sinusite, toux)</li>
                <li>Problèmes de peau (eczéma, psoriasis)</li>
                <li>Problèmes hormonaux (régulation hormonale)</li>
                <li>Pour améliorer le réseau veineux et la circulation sanguine</li>
                <li>Burn-out, dépression, troubles émotionnels, fatigue, …</li>
            </ul>
       </article>
       <article className="article">
            <h3 className="reflex_h3">Mon Rôle en tant que Réflexologue :</h3>
            <p className="pres_reflexologie">Dans le cadre d’une relation d’accompagnement, je travaille à la dissipation des tensions par une pratique adaptée de digito-pression. Par un toucher spécifique de zones dites réflexes, principalement les pieds et les mains, correspondant aux tissus et organes du corps, mon travail par des massages des pieds ou des mains permet de :</p>
            <ul className="pres_reflexologie"> 
                <li>Favoriser une relaxation globale</li>
                <li>Prévenir les troubles liés au stress</li>
                <li>Stimuler les fonctions d’autorégulation</li>
            </ul>
       </article>
       <article className="article">
            <h3 className="reflex_h3">Comment se déroule une séance de réflexologie ?</h3>
            <h4>Moment d'echange</h4>
            <p className="pres_reflexologie">La séance débute par un temps d’échange sur la raison de votre venue. Je vous poserai quelques questions d’ordres médicales afin d’affiner le soin..</p>
            <h4>Le soin de réflexologie</h4>
            <p className="pres_reflexologie">Vous serez invités à vous allonger sur une table de soin. Au besoin, un fauteuil sera également à disposition.
                Je procéderai ensuite au massage avec un peu d’huile, par des pressions avec les doigts afin de détendre les zones dans le besoin. Un petit plaid, une musique et lumière douce… c’est parti !</p>
            <p className="pres_reflexologie">Avec l’intention, le ressenti et les connaissances, ce massage permettra de désamorcer le système de stress et par régulation neuro-végétative de réduire les maux voir de les supprimer selon les cas et le nombre de séances.</p>
        </article>
        <article>
            <h3 className="reflex_h3">La Réflexologie, c’est pour qui ?</h3>
            <p className="pres_reflexologie">Cette approche globale du corps améliore la qualité de vie de la personne quelque soit son âge (enfant, adolescent, adulte, sénior).</p>
        </article>
        <p className="pres_reflexologie"><span>La Réflexologie ne remplace pas l’expertise d’un médecin et ne devra en aucun cas entrainer l’interruption d’un traitement médical en cours.</span></p>
    </div>
  );
 
}

export default Reflexologie;
