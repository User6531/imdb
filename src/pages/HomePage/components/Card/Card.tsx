import React from 'react';
import S from './Card.styled';
import Popover from 'components/Popover';
import { icons } from './helpers/icons';

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
        rated: string;
        country: string;
    },
    isAuthorized: boolean;
}

export const Card: React.FC<ICardProps> = ({card, isAuthorized}): JSX.Element => {
    return (
        <S.Wrapper>
            <S.ImgWrapper>
                <S.Img src={card.poster}/>
                <S.ImgTitle>{card.title}</S.ImgTitle>
                    <Popover triggerButton={icons.info}>
                        <S.PopoverWrapper>
                            <S.Item>Rated: {card.rated}</S.Item>
                            <S.Item>Country: {card.country}</S.Item>
                            <S.Item>Rating: {card.imdbrating} {+card.imdbrating < 7 && icons.deezLike}</S.Item>
                        </S.PopoverWrapper>
                    </Popover>
            </S.ImgWrapper>
            {isAuthorized && (
                <S.Description>
                    <S.Item>Genre: {card.genre}</S.Item>
                    {card.director !== "N/A" && (
                        <S.Item>Director: {card.director}</S.Item>
                    )}
                    <S.Item>Year: {card.year}</S.Item>
                </S.Description>
            )}
        </S.Wrapper>
    )
}
