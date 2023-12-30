import { createSlice } from '@reduxjs/toolkit'

// Custom imports 
import { IAuth } from '../../types';

const initialState: IAuth = {
  email: '',
  token: '',
  password: '', 
  isLoggedIn : false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state: IAuth, action) => {
      console.log("auth was set", action.payload); 
      return {
        ...state,
        ...action.payload
      }
    },
    logout : () => {
        return {
          ...initialState, 
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, logout } = authSlice.actions

export default authSlice.reducer