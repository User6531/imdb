import React, { ChangeEvent, useState } from 'react';
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

export const SignUpPage: React.FC = (): JSX.Element => {

    // store
    const { setUser } = LoginSlice.actions;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

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
        }
    }

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value.match(/[^a-zA-Z0-9 ]/g)) {
            setName(value);
        }
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
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
                        defaultValue={email}
                        onChange={onChangeEmail}
                        helperText={validateError.mailError}
                    />
                </S.Row>
                <S.Row>
                    <TextField
                        error={!!validateError.nameError}
                        label="Name"
                        defaultValue={name}
                        onChange={onChangeName}
                        helperText={validateError.nameError}
                    />
                </S.Row>
                <S.Row>
                    <TextField
                        error={!!validateError.passwordError}
                        label="Password"
                        defaultValue={password}
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