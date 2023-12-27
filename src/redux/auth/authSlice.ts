import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface IUser {
    username : string
    email : string
    token : string
    profilePicture ?: null | any
    password : string
}

const initialState:IUser = {
    username : '', 
    email : '', 
    token : '',
    password : ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser : (state:IUser, action) => {
        state = {
            ...state,
            ...action.payload
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer