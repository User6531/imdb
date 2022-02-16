import React, { ChangeEvent, useState } from 'react';
import S from './SignInPage.styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

// redux
import { useAppSelector } from 'hooks/useRedux';

export const SignInPage: React.FC = (): JSX.Element => {

    // store
    const { users : {data} } = useAppSelector((state) => state.LoginSlice);

    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ userError, setUserError ] = useState('');

    const [ validateError, setValidateError ] = useState<{[arg: string]: string}>({
        mailError: '',
        passwordError: ''
    });

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => { 
        e.preventDefault();
        if (handleValidation()) {
            const user = data.filter(user => user.email === email)[0];
            if (!user) {
                setUserError('User with this email address does not exists');
            } else if (user.password != password) {
                setUserError('Password is not correct');
            } else if (user.password === password) {
                navigate('/home');
            } else {
                setUserError('Something goes wrong');
            }
        }
    }

    const handleValidation = () => {
        let formIsValid = false;
        const valid = {
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

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    }

    return (
        <S.Wrapper>
            <S.Title>Sign In</S.Title>
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
            {userError && (
                <S.Error>{userError}</S.Error>
            )}
        </S.Wrapper>
    )
}