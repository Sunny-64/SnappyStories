import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../services';

export const fetchConversations = createAsyncThunk("chat/fetchConversations", async (_, thunkApi) => {
    try {
        const response = await api.fetchAllConversationsOfUser();
        return response.data.data;
    }
    catch (err: any) {
        console.log(err.response.data);
    }
})

export interface IChat {
    conversations: any[];
    selectedConversation: {
        conversationDetails: any,
        messages: any
    };
    loading: boolean;
    error: string;
}

const initialState: IChat = {
    conversations: [],
    selectedConversation: {
        conversationDetails: {},
        messages: [],
    },
    loading: false,
    error: '',
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setConversations: (state: any, action: PayloadAction<any>) => {
            return {
                ...state,
                conversations: [action.payload, ...state.conversations],
            };
        },
        setSelectedConversationDetails: (state, action) => {
            state.selectedConversation.conversationDetails = action.payload;
        },
        setSelectConversationMessages: (state, action) => {
            state.selectedConversation.messages = action.payload;
        },
        appendMessageOnSelectedConversation: (state, action) => {
            return {
                ...state,
                selectedConversation: {
                    ...state.selectedConversation,
                    messages: [...state.selectedConversation.messages, action.payload]
                }
            }
        },
        logout: () => {
            return {
                ...initialState,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversations.fulfilled, (state, action) => {
                return state = {
                    ...state,
                    loading: false,
                    conversations: [...action.payload],
                }
            })
            .addCase(fetchConversations.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchConversations.rejected, (state) => {
                state.error = "There was an error while fetching the conversations";
                state.loading = false;
            })
    }
});

// Action creators are generated for each case reducer function
export const {
    setConversations,
    setSelectConversationMessages,
    setSelectedConversationDetails,
    appendMessageOnSelectedConversation,
    logout,
} = chatSlice.actions

export default chatSlice.reducer