import axios from "axios";
import { IAuth } from "../redux/auth/authSlice";
import { store } from "../redux/store";

const BASE_URL = "http://192.168.27.96:3000"; 

const authSelector:any = store.getState(); 

console.log("Auth in api.ts.........",authSelector.auth)

// const apiInstance = axios.create({
//     baseURL: 'http://localhost:3000', // Your API base URL
//     headers: {
//       'Content-Type': 'application/json',
//       'authorization' : '' // saves the token and get it here..
//     },
//   });
  
//   // Request interceptor for logging
//   api.interceptors.request.use(request => {
//     console.log('Starting Request', request);
//     return request;
//   });
  
//   // Response interceptor for logging
//   api.interceptors.response.use(response => {
//     console.log('Response:', response);
//     return response;
//   }, error => {
//     console.error('Error Response:', error.response);
//     return Promise.reject(error);
//   });
  
  
const authHeader = {
    // 'Content-type' : 'application/json', 
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
        console.log("Otp here>>>>>>>>>.....",otp)
        return axios.post(`${BASE_URL}/v1/auth/verify-email`, {otp}, {headers : authHeader}); 
    }

}

export default new ApiService; 