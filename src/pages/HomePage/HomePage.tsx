import React, { useEffect } from 'react';
import S from './HomePage.styled';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// redux
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { LoginSlice } from 'store/LoginReducer/LoginSlice';
import { fetchFilms } from 'store/LoginReducer/LoginActionCreator';

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
            <Header />

            <S.CardsWrapper>

            </S.CardsWrapper>

        </S.Wrapper>
    )
}