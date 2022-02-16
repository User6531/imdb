import React from 'react';
import S from './WelcomePage.styled';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export const WelcomePage: React.FC = (): JSX.Element => {
    return (
        <S.Wrapper>
            <Box sx={{display: 'flex', '& > *': {m: 1}}}>
                <S.ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                    <S.Button><Link to={'sign-up'}>SIGN UP</Link></S.Button>
                    <S.Button><Link to={'sign-in'}>SIGN IN</Link></S.Button>
                    <S.Button><Link to={'home'}>BROWSE</Link></S.Button>
                </S.ButtonGroup>
            </Box>
        </S.Wrapper>
    )
}
