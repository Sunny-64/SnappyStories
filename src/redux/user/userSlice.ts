import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {api} from '../../services/'

// Custom imports 

export const fetchUserData = createAsyncThunk("user/fetchUserData", async (_, thunkApi) => {
    try{
      const res = await api.fetchUserData(); 
    return res.data.data; 
    }
    catch(err:any){
      console.log(err.response.data); 
    }
})

const initialState = {
    data : {}, 
    loading : false, 
    error : ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state.data,
        ...action.payload
      }
    },
    logout : () => {
        return {
          ...initialState, 
        }
    }
  },
  extraReducers : (builder) => {
    builder
    .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = {
            ...state.data, 
            ...action.payload
        }; 
        state.loading = false; 
    })
    .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
    })
    .addCase(fetchUserData.rejected, (state, action) => {
        state.error = 'There was an error => ' + action.payload; 
        state.loading = false; 
    }); 
  }
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer