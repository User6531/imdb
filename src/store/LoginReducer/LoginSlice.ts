import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    id: string;
    name: string;
    password: string;
    email: string;
}
interface IInitialState {
    users: {
        data: [] | User[],
        isLoading: false,
        error: ''
    }
}

const initialState: IInitialState = {
    users: {
        data: [],
        isLoading: false,
        error: ''
    }
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.users.data = [...state.users.data, action.payload];
        }

        // user info
        // loginFetching(state) {
        //     state.user.isLoading = true;
        // },
        // loginFetchingSuccess(state, action: PayloadAction<{id: string; isTermsAndConditionsAccepted: boolean; accessToken: string}>) {
        //     state.user.isLoading = false;
        //     state.user.error = '';
        //     state.user.data.id = action.payload.id;
        //     state.user.data.isTermsAndConditionsAccepted = action.payload.isTermsAndConditionsAccepted;
        //     state.user.data.accessToken = action.payload.accessToken;
        // },
        // loginFetchingError(state, action: PayloadAction<string>) {
        //     state.user.isLoading = false;
        //     state.user.error = action.payload;
        // }
    }
})

export default LoginSlice.reducer;