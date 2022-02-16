import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    id: string;
    name: string;
    password: string;
    email: string;
}
type TFilm = {
    id: string;
    title: string;
    year: string;
    genre: string;
    poster: string;
    director: string;
    imdbrating: string;
}
interface IInitialState {
    users: {
        data: [] | User[],
        isLoading: boolean,
        error: string;
    },
    currentUser: {
        isAuthorized: boolean;
        id: string;
        name: string;
        password: string;
        email: string;
    },
    films: {
        data: [] | TFilm[];
        isLoading: boolean;
        error: string;
    },
}

const initialState: IInitialState = {
    users: {
        data: [],
        isLoading: false,
        error: ''
    },
    currentUser: {
        isAuthorized: false,
        id: '',
        name: '',
        password: '', 
        email: ''
    },
    films: {
        data: [],
        isLoading: false,
        error: '',
    }
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.users.data = [...state.users.data, action.payload];
            state.currentUser = {
                ...action.payload,
                isAuthorized: true,
            }
        },
        signIn(state, action: PayloadAction<User>) {
            state.currentUser = {
                ...action.payload,
                isAuthorized: true,
            }
        },
        logOut(state) {
            state.currentUser = {
                isAuthorized: false,
                id: '',
                name: '',
                password: '', 
                email: ''
            }
        },

        // films
        filmsFetching(state) {
            state.films.isLoading = true;
        },
        filmsFetchingSuccess(state, action: PayloadAction<TFilm[]>) {
            state.films.isLoading = false;
            state.films.error = '';
            state.films.data = action.payload;
            
        },
        filmsFetchingError(state, action: PayloadAction<string>) {
            state.films.isLoading = false;
            state.films.error = action.payload;
        }
    }
})

export default LoginSlice.reducer;