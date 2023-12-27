import Home from "./home";
import Chat from "./chat";
import Profile from "./profile";
import WriteStory from "./writeStory";
import Notifications from "./notfications";
import Stories from "./stories";
import Welcome from "./welcome";
import Login from "./login";
import Register from "./register";
import VerifyOtp from "./VerifyOtp";
import Bookmarks from "./bookmark";
import ForgotPassword from "./forgotPassword";
import ResetPassword from "./resetPassword";
// Shouldn't be shown in production
import Users from "./users";

export {
    Welcome, 
    Register, 
    Login, 
    ForgotPassword,
    VerifyOtp,
    ResetPassword,
    
    Home, 
    Chat,
    Profile,
    WriteStory,
    Notifications, 
    Stories,
    Users, // needs to be removed after chat app is created
    Bookmarks,
}