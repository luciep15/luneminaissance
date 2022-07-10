import React, {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {saveOnePoeme , getAllPoeme} from '../../../api/poeme';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {config} from '../../../config.js';


import { useDispatch, useSelector } from "react-redux";
import { selectPoeme, setPoeme } from "../../../slices/poemeSlice";
import { selectUser, setUser } from "../../../slices/userSlice";

const AddProduct = (props)=>{
    
    const poeme = useSelector(selectPoeme)
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [msg , setMsg] = useState(null);
      
     //création des states du formulaire
     const [title, setTitle] = useState("");
     const [selectedFile , setSelectedFile]=useState(null);
     const [lien , setLien] = useState("")
     const [selectedFile1 , setSelectedFile1] = useState(null);
     const [image_poeme , setImagePoeme] = useState(null);
   
    // on envoie le formulaire
    const onSubmitForm = ()=>{
     if(title === "" || lien === "") {
		    setError("Tous les champs ne sont pas encore remplis !");
		}else{   
            let formData = new FormData();
        	formData.append('image', selectedFile);
            console.log(formData)  
                //requête ajax vers l'api pour enregistrer une photo
            axios({
                method: "post",
                url: config.api_url+'/api/v1/poeme/pict',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "x-access-token": user.infos.token
                }
            })
            .then((response)=>{
                //axios.post(config.api_url+'/api/v1/beers/pict', formData, {headers: {'Content-Type': 'multipart/form-data',"x-access-token": props.user.infos.token}})
                console.log(response);
                // si la photo est enregistré (status 200) alors, on enregistre l'annonce avec le nom de la photo récup!
                if(response.data.status === 200) {
                    //création de l'objet datas avec les valeurs
                    let datas = {
                        title:title,
                        lien:lien,
                        image_poeme: response.data.image_poeme,
                       }
                     let formData = new FormData();
                	formData.append('audio', selectedFile1);
                    console.log(formData)  
                        //requête ajax vers l'api pour enregistrer une photo
                    axios({
                        method: "post",
                        url: config.api_url+'/api/v1/poeme/audio',
                        data: formData,
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "x-access-token": user.infos.token
                        }
                    })
                    .then((response)=>{
                        //axios.post(config.api_url+'/api/v1/beers/pict', formData, {headers: {'Content-Type': 'multipart/form-data',"x-access-token": props.user.infos.token}})
                        console.log(response);
                        // si la photo est enregistré (status 200) alors, on enregistre l'annonce avec le nom de la photo récup!
                        if(response.data.status === 200) {
                            //création de l'objet datas avec les valeurs
                            let datas = {
                                title:title,
                                lien:response.data.lien,
                                image_poeme: image_poeme,
                               }  
                        //appel de fonction de sauvegarde
                        saveOnePoeme(datas)
                        .then((response)=>{
                            if(response.status === 200){
                                console.log(response)
                                 getAllPoeme()
                                .then((response)=>{
                                    let myPoeme = response.result
                                    myPoeme.token=localStorage.getItem("token")
                                    dispatch(setPoeme(myPoeme))
                                    setMsg("Enregistrement effectué")
                                    console.log("enregistrer!!")
                                    })
                                    .catch((err)=>{
                                        setError(err.message);
                                    })
                               } else{
                                    setError("Echec enregistrement du produit") 
                            }
                        })
                        .catch((err)=>{
                            console.log("echec d'enregistrement")
                        })
                    }
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
	        <h2>Ajouter un poeme</h2>
	        <Link className="retour" to="/admin"><i className="fa fa-arrow-circle-left"></i></Link>
	          {msg !== null && <p className="msg">{msg}</p>}
	          {error !== null && <p className="msgError">{error}</p>}
	         
	        <form 
	            className="form formProduct" 
	            onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitForm()
                }}>
	            
                <input type="text"
                    placeholder="Titre du poeme"
                    onChange={(e)=>{
                        setTitle(e.currentTarget.value);
                }} />
                
                <input type="file" 
                    onChange={(e)=>{
    			    //console.log(e.currentTarget.files[0])
    			    setSelectedFile(e.currentTarget.files[0])
    			}}/>
    		
                 <input type="file" 
                    onChange={(e)=>{
    			    //console.log(e.currentTarget.files[0])
    			    setSelectedFile1(e.currentTarget.files[0])
    			}}/>
               
                <input type="submit" placeholder="Envoyer" />
                
              
	            
            </form>
        </div>)
}

export default AddProduct;
