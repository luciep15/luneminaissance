import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getOneTarif} from "../api/tarif";
import { selectTarif , setTarif } from "../slices/tarifSlice";
import {config} from "../config";

const Tarif = (props)=>{
    
    const dispatch = useDispatch();
    const tarifs = useSelector(selectTarif)

useEffect(() => {
    //récupération de tous les produits (fonction api)
      getOneTarif(1)
        .then((response)=>{
             //envoi dans le store vers l'action pour mettre à jour les produits (dispatch)
            dispatch(setTarif(response.result));
            console.log("nouveau tarif", response.result)
        })
           //catch
         .catch(err=>console.log(err));   
    
    },[])
  
  return (
      <div>
        <h2 className="h2">Tarifs</h2>
       
		
		<div>
        
            <h3>Tarifs pour l'année :<strong className="annee"> {tarifs.annee}</strong></h3> 
            <div>
                
                <h3 className="category_tarif">Reflexologie:</h3>
                <article className="tarif_article">
                    <img className="image_tarif" src={config.pict_url+tarifs.image_plantaire} alt="image plantaire"/>
                    <p>Séance de Réflexologie <strong> plantaire {tarifs.duree_plantaire} min </strong></p>
                    <p>Prix : <strong className="prix">{tarifs.price_plantaire} € </strong></p> 
                </article> 
                <article className="tarif_article">
                    <img className="image_tarif" src={config.pict_url+tarifs.image_palmaire} alt="image palmaire"/>
                    <p>Séance de Réflexologie <strong> palmaire {tarifs.duree_palmaire} min </strong></p>
                    <p>Prix : <strong className="prix">{tarifs.price_palmaire} € </strong></p> 
                </article>
            </div>
            <div>
                <h3 className="category_tarif">Soins Energétiques :</h3>
                <article className="tarif_article">
                    <img className="image_tarif" src={config.pict_url+tarifs.image_energetique} alt="image soins energetique"/>
                    <p>Séance de <strong>Soins énergétiques {tarifs.duree_energetique} min</strong></p>
                    <p>Prix : <strong className="prix">{tarifs.price_energetique} €</strong></p> 
                </article>
            </div>
       </div>

 

    </div>
  );
 
}

export default Tarif;
