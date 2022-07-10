import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {selectTarif, setTarif} from '../../slices/tarifSlice'
import {getOneTarif} from '../../api/tarif'
import {config} from "../../config";
import { getAllPoeme , deleteOnePoeme } from "../../api/poeme";
import { selectPoeme , setPoeme } from "../../slices/poemeSlice";
import { selectCommentaire , setCommentaire } from "../../slices/commentaireSlice";
import {getAllComment , deleteOneComment} from "../../api/commentaire";

const Admin = (props)=>{
    
    //ici on va afficher les produits avec des liens pour ajouter éditer et supprimer
    const tarifs = useSelector(selectTarif)
    const dispatch = useDispatch()
    const [error, setError] = useState(null);
    const poeme = useSelector(selectPoeme)
    const commentaire = useSelector(selectCommentaire)	
    
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
         
      getAllPoeme()
        .then((response)=>{
             //envoi dans le store vers l'action pour mettre à jour les produits (dispatch)
            dispatch(setPoeme(response.result));
            console.log("nouveau poeme", response.result)
        })
           //catch
         .catch(err=>console.log(err)); 
         
      getAllComment()
        .then((response)=>{
             //envoi dans le store vers l'action pour mettre à jour les produits (dispatch)
            dispatch(setCommentaire(response.result));
            console.log("commentaire", response.result)
        })
           //catch
         .catch(err=>console.log(err));  
         
    },[])
    
	  // fonction qui supprime un poeme
	  const onClickDeletePoeme=(id)=>{
		deleteOnePoeme(id)
		.then((response)=>{
			if(response.status === 200){
			 console.log(response);
			  getAllPoeme()
			  .then((response)=>{
			  	dispatch(setPoeme(response.result))	
			  })
			  .catch(err=> console.log(err))
			}
        })	
        .catch(err=> console.log(err))
	}
	
	  // fonction qui supprime un commentaire
	  const onClickDeleteComment=(id)=>{
		deleteOneComment(id)
		.then((response)=>{
			if(response.status === 200){
			 console.log(response);
			  getAllComment()
			  .then((response)=>{
			  	dispatch(setCommentaire(response.result))	
			  })
			  .catch(err=> console.log(err))
			}
        })	
        .catch(err=> console.log(err))
	}
	
    return (
        <div className="admin">
			<h2>Admin</h2>
    	     {error !== null && <p className="msgError">{error}</p>}
    	   
			<div className="tarifArticle">
			  <Link to={"/editAnnee/"+ 1}>Modifier</Link>
              <h3>Tarifs pour l'année :<strong className="annee"> {tarifs.annee}</strong></h3> 
                <div>
                    <h3 className="category_tarif">Reflexologie:</h3>
                    <article className="tarif_article tarif_admin">
                        <img className="image_tarif" src={config.pict_url+tarifs.image_plantaire} alt="image plantaire"/>
                        <p>Séance de Réflexologie <strong> plantaire {tarifs.duree_plantaire} min </strong></p>
                        <p>Prix : <strong className="prix">{tarifs.price_plantaire} € </strong></p> 
                    </article> 
                    <article className="tarif_article tarif_admin">
                        <img className="image_tarif" src={config.pict_url+tarifs.image_palmaire} alt="image palmaire"/>
                        <p>Séance de Réflexologie <strong> palmaire {tarifs.duree_palmaire} min </strong></p>
                        <p>Prix : <strong className="prix">{tarifs.price_palmaire} € </strong></p> 
                    </article>
                </div>
                <div>
                    <h3 className="category_tarif">Soins Energétiques :</h3>
                    <article className="tarif_article tarif_admin">
                        <img className="image_tarif" src={config.pict_url+tarifs.image_energetique} alt="image soins energetique"/>
                        <p>Séance de <strong>Soins énergétiques {tarifs.duree_energetique} min</strong></p>
                        <p>Prix : <strong className="prix">{tarifs.price_energetique} €</strong></p> 
                    </article>
                </div>
            </div>

				
				
		<Link to="/addPoeme" className="ajout_admin">
			<i className="fa fa-plus-circle"></i>   Ajouter un poème
		</Link>
				
    	 {/*LISTE DES POEMES*/}
           {poeme.length > 0 ? <ul id="ul">
           {poeme.map((pm)=>{
           return <li key={pm.id} className="li_poeme">
              <img src={config.pict_url+ pm.image_poeme} alt="image poeme" className="imgPoeme"/>
              <h3>{pm.titre}</h3>
              <audio src={config.audio_url+ pm.lien} alt="poeme audio" controls ></audio>
    		    <div className="admin_fonction">
    		      <Link to={"/editProduct/"+ pm.id}>Modifier</Link>
    		  	  <button
    				onClick={(e)=>{
    					onClickDeletePoeme(pm.id)
    				}}
    		  	 >Supprimer</button>
    		  	</div>
        	</li>
           })
           }
          </ul> : <p> Aucun poème </p>
           } 
	     	
	     	
		{/*LISTE DES COMMENTAIRES*/}
        <article className="admin_comment">
            <h3 className="titre_com">Commentaires:</h3>
            {commentaire.length > 0 ? <ul id="ul">
            {commentaire.map((comment)=>{
            return <li key={comment.id} className="comment">
              <p><strong>Email :</strong> {comment.email}</p>
              <h4>Pseudo: <span>{comment.name}</span></h4>
              <h5>Commentaire :</h5>
              <p>{comment.content}</p>
              <p> <strong>Date:</strong>  {new Date(comment.CreationTimestamp).toLocaleDateString()}</p>
              <button
				onClick={(e)=>{
					onClickDeleteComment(comment.id)
				}}
		  	 >Supprimer</button>
            </li>
             })
             }
            </ul> : <p> Aucun commentaire</p>
            } 
       </article>	
		
		</div>
    )
    
}


export default Admin;