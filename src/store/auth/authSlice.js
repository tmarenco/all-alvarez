import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
       user: {},
       statusLogin: 'not-authenticated',
       errorMessageLogin: undefined,
       statusCreating: 'not-creating',
       errorMessageCreate: undefined
    },
    reducers: {
        onChecking: ( state ) => {
            state.statusLogin = 'checking';
            state.user = {};
            state.errorMessageLogin = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.statusLogin = 'authenticated';
            state.user = payload;
            state.errorMessageLogin = undefined;
        },
        onLogout: (state, { payload }) => {
            state.statusLogin = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        onCheckingCreate: ( state ) => {
            state.statusCreating = 'checking';
            state.errorMessageCreate = undefined;
        },
        onCreateUser: (state, { payload }) => {
            state.statusCreating = payload.status;
            state.errorMessageCreate = payload.errorMessage;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessageLogin = undefined;
            state.errorMessageCreate = undefined;
        }
        
  },
});
export const { onChecking, onLogin, onLogout, clearErrorMessage, onCheckingCreate, onCreateUser } = authSlice.actions;