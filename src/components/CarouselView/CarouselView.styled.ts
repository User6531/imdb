import styled from 'styled-components';
import { breakpoints } from 'global/breakpoints';

const
ImgWrapper = styled.div`
    position: relative;
    width: 500px;
    height: 250px;
    margin: 0 auto;
    margin-top: 50px;
    z-index: 1;

    ${breakpoints("width", "px", [
        { 620: 400 },
        { 425: 250 }
    ])};
    ${breakpoints("height", "px", [
        { 620: 200 },
        { 425: 180 }
    ])};
`,
Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,
Title = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
    font-size: 30px;
    font-weight: 700;
    width: 100%;
    text-align: center;
`

export default {
    ImgWrapper,
    Img,
    Title
}