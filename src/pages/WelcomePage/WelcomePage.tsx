import React from 'react';
import S from './WelcomePage.styled';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CarouselView from 'components/CarouselView';

// types
interface IWelcomePageProps {
    setSignUpBehavior: (signUpBehavior: 'first' | 'resume') => void;
}

export const WelcomePage: React.FC<IWelcomePageProps> = ({setSignUpBehavior}): JSX.Element => {

    const isSignUpData = () => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        return [name, email, password].some(item => item);
    }

    return (
        <S.Wrapper>
            <CarouselView />
            <Box sx={{display: 'flex', '& > *': {m: 1}}}>
                <S.ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                    <S.Button onClick={() => setSignUpBehavior('first')}><Link to={'sign-up'}>SIGN UP</Link></S.Button>
                    <S.Button><Link to={'sign-in'}>SIGN IN</Link></S.Button>
                    <S.Button><Link to={'home'}>BROWSE</Link></S.Button>
                    {isSignUpData() && (
                        <S.Button onClick={() => setSignUpBehavior('resume')}><Link to={'sign-up'}>Resume signup</Link></S.Button>
                    )}
                </S.ButtonGroup>
            </Box>
        </S.Wrapper>
    )
}
