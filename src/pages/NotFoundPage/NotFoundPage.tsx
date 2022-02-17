import React from 'react';
import { Link } from 'react-router-dom';
import S from './NotFoundPage.styled';

export const NotFoundPage: React.FC = (): JSX.Element => {
    return (
        <S.Wrapper>
            <div>404 Page Not Found</div>
            <Link to={'/'}>go home</Link>
        </S.Wrapper>
    )
}