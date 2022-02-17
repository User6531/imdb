import styled from 'styled-components';
import { breakpoints } from 'global/breakpoints';

const Wrapper = styled.div`
    width: 25%;
    margin: 50px auto;
    min-height: 320px;
    
    ${breakpoints("width", "%", [
        { 1200: 33.333 },
        { 867: 50 },
        { 620: 100 },
    ])};
`,
ImgWrapper = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    margin: 0 auto;
`,
Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,
ImgTitle = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: red;
    text-align: center;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
`,
Description = styled.div`
    width: 250px;
    margin: 0 auto;
`,
Item = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-left: 15px;
    }
`,
PopoverWrapper = styled.div`
    padding: 15px;
`

export default {
    Wrapper,
    ImgWrapper,
    Img,
    ImgTitle,
    Description,
    Item,
    PopoverWrapper
}