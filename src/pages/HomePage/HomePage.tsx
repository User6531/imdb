import React, { useEffect, useState } from 'react';
import S from './HomePage.styled';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import InfiniteScroll from 'react-infinite-scroll-component';

// redux
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { LoginSlice } from 'store/LoginReducer/LoginSlice';
import { fetchFilms } from 'store/LoginReducer/LoginActionCreator';
import { Card } from './components/Card/Card'; 
import { Modal } from '@mui/material';

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

    // infinite-scroll-setup
    const [count, setCount] = useState({prev: 0,next: 20});
    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(data.slice(count.prev, count.next))
    const getMoreData = () => {
        if (current.length >= data.length) {
          setHasMore(false);
          return;
        }
        setTimeout(() => {
          setCurrent(current.concat(data.slice(count.prev + 20, count.next + 20)));
        }, 1000)
        setCount((prevState) => ({ prev: prevState.prev + 20, next: prevState.next + 20 }));
    }

    useEffect(() => {
        setCurrent(data.slice(count.prev, count.next));
    }, [data])

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

            <Modal open={isLoading}><S.Loading>Loading...</S.Loading></Modal>

            {error && (
                <div>{error}</div>
            )}

            <Header />

            <InfiniteScroll
                dataLength={current.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<S.Loading>Loading...</S.Loading>}
                className='infinite-scroll'
            >
                {current && current.map((film: TFilm) => (
                    <Card
                        isAuthorized={currentUser.isAuthorized}
                        key={film.id}
                        card={film}
                    />
                ))}
            </InfiniteScroll>

        </S.Wrapper>
    )
}
