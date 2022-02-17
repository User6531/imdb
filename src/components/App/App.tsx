import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import S from './App.styled';

// pages
import WelcomePage from 'pages/WelcomePage';
import SignUpPage from 'pages/SignUpPage';
import NotFoundPage from 'pages/NotFoundPage';
import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';

export const App: React.FC = (): JSX.Element => {

  // if signUpBehavior === resume, user can see the resume button and get his old data 
  const [ signUpBehavior, setSignUpBehavior ] = useState<'first' | 'resume'>('first');

  return (
    <S.Wrapper>
       <Routes>
          <Route>
            <Route path="/" element={<WelcomePage setSignUpBehavior={setSignUpBehavior}/>} />
            <Route path="sign-up" element={<SignUpPage signUpBehavior={signUpBehavior}/>} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route> 
        </Routes>
    </S.Wrapper>
  );
}