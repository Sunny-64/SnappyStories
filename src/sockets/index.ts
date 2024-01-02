import { io } from "socket.io-client";
import { store } from "../redux/store";

const BASE_URL = "http://192.168.27.96:3000"; 
const authSelector:any = store.getState(); 

const socket = io(`${BASE_URL}`, {
    auth : {
        token : 'Bearer ' + authSelector.auth!.token 
    }
});

export const initializeSocket = () => {
    socket.on("connected", () => {
        console.log("socket connection established...."); 
    })
}


export default socket;