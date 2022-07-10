import axios from "axios";
import { config } from "../config";
const token = window.localStorage.getItem("token");


export const saveOnePoeme = (datas) => {
   return axios.post(config.api_url + '/api/v1/music/save', datas ,{headers: {"x-access-token": token}})    
    .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        }) 
     
}

export const updateOnePoeme = (datas, id) => {
   return axios.put(config.api_url + '/api/v1/music/update/' + id , datas ,{headers: {"x-access-token": token}})    
    .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        }) 
     
}

export const deleteOnePoeme = (id) => {
    return axios.delete(config.api_url + '/api/v1/music/delete/' + id , {headers: {"x-access-token": token}})    
    .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        }) 
    
}

export const  getOnePoeme = (id)=>{
   return axios.get(config.api_url + '/api/v1/music/' + id)   
   .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        })  
}

export const  getAllPoeme = ()=>{
   return axios.get(config.api_url + '/api/v1/music')   
   .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            return err
        })  
}
