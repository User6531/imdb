import React from 'react';
import { Routes, Route } from "react-router-dom";
import S from './App.styled';

// pages
import WelcomePage from 'pages/WelcomePage';
import SignUpPage from 'pages/SignUpPage';
import NotFoundPage from 'pages/NotFoundPage';
import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';

export const App: React.FC = (): JSX.Element => {
  return (
    <S.Wrapper>
       <Routes>
          <Route>
            <Route path="/" element={<WelcomePage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route> 
        </Routes>
    </S.Wrapper>
  );
}