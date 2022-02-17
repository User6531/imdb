import { AppDispatch } from "store/configureStore";
import axios from "axios";
import { LoginSlice } from './LoginSlice';

//types
type TFilm = {
    id: string;
    title: string;
    year: string;
    genre: string;
    poster: string;
    director: string;
    imdbrating: string;
    rated: string;
    country: string;
}

export const fetchFilms= () => async (dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(LoginSlice.actions.filmsFetching());
        const response = await axios.get<TFilm[]>(`https://raw.githubusercontent.com/User6531/imdb/main/src/imdb.json`);
        dispatch(LoginSlice.actions.filmsFetchingSuccess(response.data))
    } catch (error) {
        const { message } = error as Error;
        dispatch(LoginSlice.actions.filmsFetchingError(message))
    }
}