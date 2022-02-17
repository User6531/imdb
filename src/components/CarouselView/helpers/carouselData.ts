import { v4 as generateId } from 'uuid';
import { imgs } from './imgs';

export const carouselData = [
    {id: generateId(), title: 'Spider-Man: No Way Home', img: imgs.spiderMan},
    {id: generateId(), title: 'The Matrix', img: imgs.matrix},
    {id: generateId(), title: `Don't Look Up`, img: imgs.dontLookUp}
]

