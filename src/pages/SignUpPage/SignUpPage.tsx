import React, { ChangeEvent, useEffect, useState } from 'react';
import S from './SignUpPage.styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import validator from 'validator';
import { v4 as generateId } from 'uuid';
import { useNavigate } from 'react-router-dom';

// redux
import { useAppDispatch } from 'hooks/useRedux';
import { LoginSlice } from 'store/LoginReducer/LoginSlice';

// types
interface ISignUpPageProps {
    signUpBehavior: 'first' | 'resume';
}

export const SignUpPage: React.FC<ISignUpPageProps> = ({signUpBehavior}): JSX.Element => {

    // store
    const { setUser } = LoginSlice.actions;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    // local storage settings
    useEffect(() => {
        if (signUpBehavior === 'resume') {
            setEmail(localStorage.getItem('email')  || '');
            setName(localStorage.getItem('name')  || '');
            setPassword(localStorage.getItem('password')  || '');
        } else if (signUpBehavior === 'first') {
            localStorage.clear();
        }
    }, [signUpBehavior])

    const [ validateError, setValidateError ] = useState<{[arg: string]: string}>({
        nameError: '',
        mailError: '',
        passwordError: ''
    });

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => { 
        e.preventDefault();
        if (handleValidation()) {
            dispatch(setUser({
                id: generateId(),
                name,
                password,
                email
            }));
            navigate('/home');
        }
    }

    const handleValidation = () => {
        let formIsValid = false;
        const valid = {
            validName: !!name,
            validMail: validator.isEmail(email),
            validPassword: validator.isStrongPassword(password, {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            })
        }

        setValidateError({
            nameError: !valid.validName ? 'Name is required' : '',
            mailError: !valid.validMail ? `Mail isn't correct` : '',
            passwordError: !valid.validPassword ? 'Password should have at least one big letter, one number one special symbol' : '',
        });

        formIsValid = Object.values(valid).every(item => item);
        
        return formIsValid;
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[A-Za-z0-9.@_-]+$/.test(value) || value === '') {
            setEmail(value);
            localStorage.setItem('email', value);
        }
    }

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value.match(/[^a-zA-Z0-9 ]/g)) {
            setName(value);
            localStorage.setItem('name', value);
        }
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        localStorage.setItem('password', value);
    }

    return (
        <S.Wrapper>
            <S.Title>Sign Up</S.Title>
             <Box 
                component="form" sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
            >
                <S.Row>
                    <TextField
                        error={!!validateError.mailError}
                        label="E-mail"
                        value={email}
                        onChange={onChangeEmail}
                        helperText={validateError.mailError}
                    />
                </S.Row>
                <S.Row>
                    <TextField
                        error={!!validateError.nameError}
                        label="Name"
                        value={name}
                        onChange={onChangeName}
                        helperText={validateError.nameError}
                    />
                </S.Row>
                <S.Row>
                    <TextField
                        error={!!validateError.passwordError}
                        label="Password"
                        value={password}
                        onChange={onChangePassword}
                        type='password'
                        helperText={validateError.passwordError}
                    />
                </S.Row>
                <S.Row>
                    <Button onClick={handleSubmit}>Submit</Button>
                </S.Row>
            </Box>
        </S.Wrapper>
    )
}