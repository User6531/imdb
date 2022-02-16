import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    margin: 50px auto;
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
`

export default {
    Wrapper,
    ImgWrapper,
    Img,
    ImgTitle,
    Description,
    Item
}