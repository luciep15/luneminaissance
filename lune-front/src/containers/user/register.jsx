import React, {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import { saveUser } from "../../api/user";
const Register = (props)=>{
    
     //ici toutes nos states pour récup les valeurs du form
    const [msg , setMsg] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);
    
    const [firstName, setFirstName] = useState("");
    const [lastName , setLastName]=useState("");
    const [email , setEmail]= useState("");
    const [password , setPassword] = useState("");

    
    const onSubmitForm = () => {
     if(firstName === "" || lastName === "" || email === "" || password === "") {
		    setError("Tous les champs ne sont pas encore remplis !");
		}else{   
     
     let data = {
            firstName:firstName,
            lastName:lastName,
            email:email.toLowerCase(),
            password:password,
           
     }  
        console.log(data)
        saveUser(data)
        .then((response)=>{
            if(response.status ===200){
                setRedirect({redirect: true})
                console.log("enregistré !!")
            }
        })
        .catch(err=>console.log("echec save", error))
    }
    }
    if(redirect) {
	        return <Navigate to="/login" />
	    }


	return (
		   <div className="formulaire-mobile">
	       <h2>S'enregistrer</h2> 
	        {error !== null && <p className="msgError">{error}</p>}
    	    <form className="form" onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmitForm()
                    }}>
                <input type="text" name="firstName" placeholder="Votre Prenom" 
                            onChange={(e)=>{
                            setFirstName(e.currentTarget.value);
                            }}/>
                <input type="text" name="lastName" placeholder="Votre Nom"
                            onChange={(e)=>{
                            setLastName(e.currentTarget.value);
                            }}/>
                <input type="mail" name="email" placeholder="Votre Mail" 
                            onChange={(e)=>{
                            setEmail(e.currentTarget.value);
                            }} />
                <input type="password" name="password" placeholder="Votre Mot de passe"
                            onChange={(e)=>{
                            setPassword(e.currentTarget.value);
                            }}/>
                            
                <input type="submit" value="S'enregistrer" />
            </form> 
        </div>
        )
}
	

export default Register;
