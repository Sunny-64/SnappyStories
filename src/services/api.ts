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
        return axios.post(`${BASE_URL}/v1/auth/register`,data);
    }
    login({email, password} : {email : string, password : string}) {
        return axios.post(`${BASE_URL}/v1/auth/login`,{email, password});
    }
    verifyEmail(otp:string){
        return axios.post(`${BASE_URL}/v1/auth/verify-email`, {otp}, {headers : authHeader}); 
    }
    fetchUserData(){
        return axios.get(`${BASE_URL}/v1/users/currentUser`, {headers : authHeader}); 
    }
    fetchUsers(){
        return axios.get(`${BASE_URL}/v1/users`, {headers : authHeader}); 
    }
    fetchAllConversationsOfUser() {
        return axios.get(`${BASE_URL}/v1/conversations`, {headers : authHeader}); 
    }
    fetchOrCreateConversation(userId : string){
        return axios.post(`${BASE_URL}/v1/conversations/${userId}`, {}, {headers : authHeader});
    }
    fetchMessagesOfAConversation(conversationId : string){
        return axios.get(`${BASE_URL}/v1/messages/${conversationId}`, {headers : authHeader})
    }
    sendMessage(conversationId:string, message:string){
        return axios.post(`${BASE_URL}/v1/messages/${conversationId}`, {message} ,{headers : authHeader})
    }
}

export default new ApiService; 