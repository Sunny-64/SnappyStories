import axios from "axios";
import { IAuth } from "../types";
import { store } from "../redux/store";

const BASE_URL = "http://192.168.27.96:3000"; 

const authSelector:any = store.getState(); 
  
const authHeader = {
    'Authorization' : 'Bearer ' + authSelector.auth!.token 
}

class ApiService {

    register(data:IAuth) {
        console.log(data); 
        return axios.post(`${BASE_URL}/v1/auth/register`,data);
    }
    login({email, password} : {email : string, password : string}) {
        return axios.post(`${BASE_URL}/v1/auth/login`,{email, password});
    }
    verifyEmail(otp:string){
        return axios.post(`${BASE_URL}/v1/auth/verify-email`, {otp}, {headers : authHeader}); 
    }
}

export default new ApiService; 