import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPoeme} from "../api/poeme";
import { selectPoeme , setPoeme } from "../slices/poemeSlice";
import {config} from "../config";
import image_poeme from "../assets/images/image_poeme1.png";
import { selectCommentaire , setCommentaire } from "../slices/commentaireSlice";
import {getAllComment , SaveOneComment} from "../api/commentaire";

const Poeme = (props)=>{
    
    const dispatch = useDispatch();
    const poeme = useSelector(selectPoeme)
    
    const commentaire = useSelector(selectCommentaire)
    
    const [error, setError] = useState(null);
    const [msg , setMsg] = useState(null);
    const [redirect, setRedirect] = useState(false);
    
     //création des states du formulaire
     const [name, setName] = useState("");
     const [email , setEmail] = useState("")
     const [content , setContent]= useState("");
    
    
    
    useEffect(() => {
        //récupération de tous les produits (fonction api)
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
                console.log("nouveau poeme", response.result)
            })
               //catch
             .catch(err=>console.log(err));   
             
        
        },[])
    
    
 // on envoie le formulaire pour ajouter un commentaire
    const onSubmitForm = ()=>{
     if(name === "" ||  email === "" || content === "" ) {
		    setError("Tous les champs ne sont pas encore remplis !");
		}else{   
  
            let datas = {
                name:name,
                email:email,
                content:content,
               }
            //appel de fonction de sauvegarde
           SaveOneComment(datas)
            .then((response)=>{
                if(response.status === 200){
                    console.log(response)
                    getAllComment()
                    .then((response)=>{
                        let myComment = response.result
                        myComment.token=localStorage.getItem("token")
                        dispatch(setCommentaire(myComment))
                        setMsg("Enregistrement effectué")
                        console.log("enregistrer!!")
                        })
                        .catch((err)=>{
                            setError(err.message);
                        })
                   } else{
                        setError("Echec enregistrement du commentaire") 
                }
            })
            .catch((err)=>{
                console.log("echec d'enregistrement")
            })
        }
    }
    
  
   return (
      <div>
        <h2 className="h2 ">Poèmes Méditatifs</h2>
        <img src={ image_poeme } className="imgPoemeTitre"/>
        
        
		<div>
        <h3 className="pres_reflexologie reflex_h3" ><strong>Je vous invite à un voyage de votre esprit.</strong></h3>
        <p className="pres_reflexologie">Ces poèmes ont été crée afin d’ouvrir à la réflexion sur des sujets de la vie quotidienne.
        Ils sont là pour vous accompagner, pour vous aider d’une autre manière dans votre évolution. C’est une invitation à la prise de conscience et à l’ouverture de l’esprit.
        Le format se veut court, choisissez le thème qui vous appelle et prenez un moment pour vous.
        Ils sont à écouter de préférence avec des oreillettes ou un casque, pour un voyage sonore optimal.</p>
        <p className="pres_reflexologie"><strong>Ils sont rendus pour la plupart accessibles à tous !</strong></p>      
        <p className="pres_reflexologie">Vous les retrouverez :</p>  
        <p className="pres_reflexologie"><strong>A lire </strong> sur <a href="https://www.instagram.com/luneminaissante/?hl=fr" className="lien reseau">mon Instagram Luneminaissante</a></p>
         <p className="pres_reflexologie"><strong>A écouter </strong> sur <a href="https://anchor.fm/luneminaissante" className="lien reseau">Anchor Luneminaissante</a> ou <a href="https://open.spotify.com/show/5JIgYlU9mRgGhbtqGl9pk2" className="lien reseau">Spotify</a></p>
       </div>
       
       {/*LISTE DES POEMES*/}
       {poeme.length > 0 ? <ul id="ul">
       {poeme.map((pm)=>{
       return <li key={pm.id} className="li_poeme">
          <img src={config.pict_url+ pm.image_poeme} alt="image poeme" className="imgPoeme"/>
          <h3>{pm.titre}</h3>
          <audio src={config.audio_url+ pm.lien} alt="poeme audio" controls ></audio>
      </li>
       })
       }
      </ul> : <p> Aucun poème </p>
       } 
       
       {/*LISTE DES COMMENTAIRES*/}
        <article>
            <h3 className="titre_com">Commentaires:</h3>
            {commentaire.length > 0 ? <ul id="ul">
            {commentaire.map((comment)=>{
            return <li key={comment.id} className="comment">
              <h4>Pseudo: <span>{comment.name}</span></h4>
              <h5>Commentaire :</h5>
              <p>{comment.content}</p>
              <p> <strong>Date:</strong>  {new Date(comment.CreationTimestamp).toLocaleDateString()}</p>
            </li>
             })
             }
            </ul> : <p> Aucun commentaire</p>
            } 
       </article>
       
       
       {/*FORMULAIRE AJOUT D'UN COMMENTAIRE*/}
        <form className="form formulaire-mobile" 
            onSubmit={(e)=>{
                e.preventDefault();
                onSubmitForm()
            }}>
            <h2>Laisser un commentaire:</h2>
            {msg !== null && <p className="msg">{msg}</p>}
	        {error !== null && <p className="msgError">{error}</p>}
	        
            <input type="text" name="name" placeholder="Votre Prenom ou Pseudo" 
                onChange={(e)=>{
                setName(e.currentTarget.value);
                }}/>
            <input type="mail" name="email" placeholder="Votre Email"
                onChange={(e)=>{
                setEmail(e.currentTarget.value);
                }}/>
            <p><span className="message">* Votre email n'apparaitra pas sur le site</span></p>
           
            <textarea 
				placeholder="Commentaire"
				onChange={(e)=>{
				    setContent(e.currentTarget.value);
				}}
			/>
                        
            <input type="submit" value="Enregistrer" />
        </form> 
       
       
    </div>
  );
 
}

export default Poeme;
