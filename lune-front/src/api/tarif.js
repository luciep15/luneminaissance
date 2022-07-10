import axios from "axios";
import { config } from "../config";
const token = window.localStorage.getItem("token");

export const saveOneTarif = (datas) => {
   return axios.post(config.api_url + '/api/v1/tarif/save', datas ,{headers: {"x-access-token": token}})   
   .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        }) 
}

export const updateOneTarif = (datas, id) => {
   return axios.put(config.api_url + '/api/v1/tarif/update/' + id , datas ,{headers: {"x-access-token": token}})    
    .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        }) 
     
}

export const deleteOneTarif = (id) => {
    return axios.delete(config.api_url + '/api/v1/tarif/delete/' + id , {headers: {"x-access-token": token}})    
    .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        }) 
    
}
export const  getAllTarif = ()=>{
   return axios.get(config.api_url + '/api/v1/alltarif')   
   .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        })  
}


export const  getOneTarif = (id)=>{
   return axios.get(config.api_url + '/api/v1/tarif/' + id)   
   .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        })  
}

