import React from 'react';
import Carousel from 'react-material-ui-carousel';
import S from './CarouselView.styled';
import { carouselData as items } from './helpers/carouselData';
import _ from 'lodash';

export const CarouselView: React.FC = (): JSX.Element => {

    const Item = ({name, img}: {name: string; img: string;}) => {
        return (
            <S.ImgWrapper>
                <S.Img src={img}/>
                <S.Title>{_.truncate(name, {'length': 50,'omission': '...'})}</S.Title>
            </S.ImgWrapper>
        )
    }

    return (
        <Carousel>
            {items.map(item=> (
                <Item
                    key={item.id}
                    name={item.title}
                    img={item.img}
                />
            ))}
        </Carousel>
    )
}
