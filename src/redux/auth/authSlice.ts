import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface IAuth {
  token : string;
  email ?: string;
  password ?: string;
}

const initialState: IAuth = {
  email: '',
  token: '',
  password: ''
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
      // console.log("auth was set>>>>>>>>>>>>....\n\n",state.token);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer