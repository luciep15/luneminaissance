import React, {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {updateOneTarif , getOneTarif , getAllTarif} from '../../../api/tarif';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {config} from '../../../config.js';

import { useDispatch, useSelector } from "react-redux";
import { selectTarif, setTarif } from "../../../slices/tarifSlice";
import { selectUser, setUser } from "../../../slices/userSlice";

const EditAnnee = (props)=>{
    
 //   const params = useParams();
    const tarifs = useSelector(selectTarif)
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
     
     const [error, setError] = useState(null);
     const [redirect, setRedirect] = useState(false);
     const [msg , setMsg] = useState(null);
     
     const [selectedFile , setSelectedFile]=useState(null);
     const [selectedFile1 , setSelectedFile1]=useState(null);
     const [selectedFile2 , setSelectedFile2]=useState(null);
     
     //création des states du formulaire
     const [annee, setAnnee] = useState("");
     const [image_plantaire , setImagePlantaire] = useState("");
     const [duree_plantaire , setDureePlantaire] = useState("");
     const [price_plantaire , setPricePlantaire] = useState("");
     
     const [image_palmaire , setImagePalmaire] = useState("");
     const [duree_palmaire , setDureePalmaire] = useState("");
     const [price_palmaire , setPricePalmaire] = useState("");
     
     const [image_energetique , setImageEnergetique] = useState("");
     const [duree_energetique , setDureeEnergetique] = useState("");
     const [price_energetique , setPriceEnergetique] = useState("");
     
     
     useEffect(()=>{
         getOneTarif(1)
        .then((response)=>{
             //envoi dans le store vers l'action pour mettre à jour les produits (dispatch)
            setAnnee(response.result.annee)
            setDureePlantaire(response.result.duree_plantaire)
            setPricePlantaire(response.result.price_plantaire)
        //    setImagePlantaire(response.result.image_plantaire)
            
            setDureePalmaire(response.result.duree_palmaire)
            setPricePalmaire(response.result.price_palmaire)
          //  setImagePalmaire(response.result.image_palmaire)
            
            setDureeEnergetique(response.result.duree_energetique)
            setPriceEnergetique(response.result.price_energetique)
         //   setImageEnergetique(response.result.image_energetique)
            
            dispatch(setTarif(response.result));
            console.log("nouveau tarif", response.result)
        })
           //catch
         .catch(err=>console.log(err));  
          
    	}, [])
    	
	
    // on envoie le formulaire
    const onSubmitForm = ()=>{
    if(selectedFile === null){
        let datas = {
                annee:annee,
                image_plantaire: image_plantaire,
                duree_plantaire: duree_plantaire,
                price_plantaire: price_plantaire,
                
                image_palmaire: image_palmaire,
                duree_palmaire: duree_palmaire,
                price_palmaire: price_palmaire,
                
                image_energetique: image_energetique,
                duree_energetique: duree_energetique,
                price_energetique: price_energetique,
        }
        //appel de fonction de sauvegarde
        updateOneTarif(datas , 1)
        .then((response)=>{
            if(response.status === 200){
                getOneTarif(1)
                .then((response)=>{
                    let myTarif = response.result
                    myTarif.token=localStorage.getItem("token")
                    dispatch(setTarif(myTarif))
                    setRedirect(true)
                    setMsg("Modification effectué")
                    console.log("modifié!!")
                    })
                    .catch((err)=>{
                        setError(err.message);
                    })
               } else{
                    setError("Echec modification du produit") 
                }
        })
        .catch((err)=>{
            console.log("echec modification")
        })     
               
    }else{
        let formData = new FormData();
    	formData.append('image', selectedFile);
       //requête ajax vers l'api pour enregistrer une photo
     
        axios({
            method: "post",
            url: config.api_url+'/api/v1/tarif/pict',
            data: formData,
            headers: {
                 'Content-Type': 'multipart/form-data',
                 "x-access-token": user.infos.token
            }
        })
        .then((response)=>{
            // si la photo est enregistré (status 200) alors, on enregistre l'annonce avec le nom de la photo récup!
            if(response.data.status === 200) {
                console.log(response.data)
                //création de l'objet datas avec les valeurs
                let datas = {
                    annee:annee,
                    image_plantaire: response.data.image_plantaire,
                    duree_plantaire: duree_plantaire,
                    price_plantaire: price_plantaire,
                    
                    image_palmaire: response.data.image_palmaire,
                    duree_palmaire: duree_palmaire,
                    price_palmaire: price_palmaire,
                    
                    image_energetique: response.data.image_energetique,
                    duree_energetique: duree_energetique,
                    price_energetique: price_energetique,
                   }
                   
                //appel de fonction de sauvegarde
                updateOneTarif(datas , 1)
                .then((response)=>{
                    if(response.status === 200){
                        getOneTarif(1)
                        .then((response)=>{
                            let myTarif = response.result
                            myTarif.token=localStorage.getItem("token")
                            dispatch(setTarif(myTarif))
                            setRedirect(true)
                            setMsg("Modification effectué")
                            console.log("modifié!!")
                            })
                            .catch((err)=>{
                                setError(err.message);
                            })
                       } else{
                            setError("Echec modification du produit") 
                        }
                })
                .catch((err)=>{
                    console.log("echec modification")
                })
            }
        })
    }
}
    
       
    if(redirect) {
	   return <Navigate to="/admin"/>
	}
	    
	return (
	    <div className="formulaire-mobile">
	        <h2>Modifier</h2> 
	         <Link className="retour" to="/admin"><i className="fa fa-arrow-circle-left"></i></Link>
	         {msg !== null && <p className="msg">{msg}</p>}
	         {error !== null && <p className="msgError">{error}</p>}
	        <form 
	            className="form formProduct" 
	            onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitForm()
                }}>
     
                <label>Année:</label>
                <input type="number"
                    placeholder="année"
                    defaultValue={annee}
                    onChange={(e)=>{
                        setAnnee(e.currentTarget.value);
                        
                    }} 
                />  
                <div>
                    <h3>Reflexologie plantaire</h3>
                   {/* <input type="file" 
                     defaultValue={image_plantaire}
                     onChange={(e)=>{
        			    setSelectedFile(e.currentTarget.files[0])
        			}}/> */}
        			<label>Durée de la séance: (min)</label>
                    <input type="number"
                        placeholder="duree"
                        defaultValue={duree_plantaire}
                        onChange={(e)=>{
                          setDureePlantaire(e.currentTarget.value);
                        }} />  
                    <label>Prix de la séance: (€)</label>    
                    <input type="text"
                    placeholder="Prix d'achat"
                    defaultValue={price_plantaire}
                    onChange={(e)=>{
                      setPricePlantaire(e.currentTarget.value);
                    }} />      
                </div>
                <div>
                    <h3>Reflexologie palmaire</h3>
                  {/*  <input type="file" 
                     defaultValue={image_palmaire}
                     onChange={(e)=>{
                        setSelectedFile1(e.currentTarget.files[0])
                    }}/> */}
                    <label>Durée de la séance: (min)</label>
                    <input type="number"
                        placeholder="duree"
                        defaultValue={duree_palmaire}
                        onChange={(e)=>{
                          setDureePalmaire(e.currentTarget.value);
                        }} />  
                    <label>Prix de la séance: (€)</label>    
                    <input type="text"
                    placeholder="Prix d'achat"
                    defaultValue={price_palmaire}
                    onChange={(e)=>{
                      setPricePalmaire(e.currentTarget.value);
                    }} />      
                </div>
                <div>
                    <h3>Soins energetiques</h3>
                  {/*  <input type="file" 
                     defaultValue={image_energetique}
                     onChange={(e)=>{
                        setSelectedFile2(e.currentTarget.files[0])
                    }}/> */}
                    <label>Durée de la séance: (min)</label>
                    <input type="number"
                        placeholder="duree"
                        defaultValue={duree_energetique}
                        onChange={(e)=>{
                          setDureeEnergetique(e.currentTarget.value);
                        }} />  
                    <label>Prix de la séance: (€)</label>    
                    <input type="text"
                    placeholder="Prix d'achat"
                    defaultValue={price_energetique}
                    onChange={(e)=>{
                      setPriceEnergetique(e.currentTarget.value);
                    }} />      
                </div>
                
                <input type="submit" placeholder="Envoyer" />
            </form>
        </div>)
}

export default EditAnnee;
