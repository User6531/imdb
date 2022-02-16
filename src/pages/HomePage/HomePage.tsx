import React, { useEffect } from 'react';
import S from './HomePage.styled';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// redux
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { LoginSlice } from 'store/LoginReducer/LoginSlice';
import { fetchFilms } from 'store/LoginReducer/LoginActionCreator';
import { Card } from './components/Card/Card'; 

//types
type TFilm = {
    id: string;
    title: string;
    year: string;
    genre: string;
    poster: string;
    director: string;
    imdbrating: string;
}

export const HomePage: React.FC = (): JSX.Element => {

    // store
    const { 
        currentUser,
        films: {data, isLoading, error}
     } = useAppSelector((state) => state.LoginSlice);
    const dispatch = useAppDispatch();
    const { logOut } = LoginSlice.actions;

    // dispatch films data
    useEffect(() => { 
        dispatch(fetchFilms());
    }, [])
    
    const logOutHandler = () => {
        dispatch(logOut());
    }

    const Header = () => {
        if (currentUser.isAuthorized) {
            return (
                <S.Header>
                    <Button onClick={logOutHandler}>LogOut</Button>
                    <S.HelloTitle>Welcome {currentUser.name}</S.HelloTitle>
                </S.Header>
                
            )
        } else {
            return (
                <S.Header>
                    <S.ButtonGroup orientation="horizontal" >
                        <S.Button><Link to={'/sign-up'}>SIGN UP</Link></S.Button>
                        <S.Button><Link to={'/sign-in'}>SIGN IN</Link></S.Button>
                    </S.ButtonGroup>
                </S.Header>
            )
        }
    }

    return (
        <S.Wrapper>

            {isLoading && (
                <div>Loading...</div>
            )}

            {error && (
                <div>{error}</div>
            )}

            <Header />

            <S.CardsWrapper>
                {data.map((film: TFilm, i: number) => i < 10 && (
                    <Card
                        isAuthorized={currentUser.isAuthorized}
                        key={film.id}
                        card={film}
                    />
                ))}
            </S.CardsWrapper>

        </S.Wrapper>
    )
}
