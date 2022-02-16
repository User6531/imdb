import React from 'react';
import S from './Card.styled';

// types
interface ICardProps {
    card: {
        id: string;
        title: string;
        year: string;
        genre: string;
        poster: string;
        director: string;
        imdbrating: string;
    },
    isAuthorized: boolean;
}

export const Card: React.FC<ICardProps> = ({card, isAuthorized}): JSX.Element => {

    const deezlike = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
        </svg>
    )

    return (
        <S.Wrapper>
            <S.ImgWrapper>
                <S.Img src={card.poster}/>
                <S.ImgTitle>{card.title}</S.ImgTitle>
            </S.ImgWrapper>
            {isAuthorized && (
                <S.Description>
                    <S.Item>Genre: {card.genre}</S.Item>
                    {card.director !== "N/A" && (
                        <S.Item>Director: {card.director}</S.Item>
                    )}
                    <S.Item>Year: {card.year}</S.Item>
                    <S.Item>
                        Rating: {card.imdbrating}
                        {+card.imdbrating < 7 && deezlike}
                    </S.Item>

                    
                </S.Description>
            )}
        </S.Wrapper>
    )
}
