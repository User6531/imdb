import styled from "styled-components";
import {
    Button as muiButton,
    ButtonGroup as muiButtonGroup
} from '@mui/material';

const
Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`,
Button = styled(muiButton)`&&& {
    font-size: 18px;
    
    a {
        text-decoration: none;
        color: inherit;
    }
}`,
ButtonGroup = styled(muiButtonGroup)`&&&{
    margin: 30px auto;
}`,
HelloTitle = styled.div``,
Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`,
CardsWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default { 
    Wrapper,
    Button,
    ButtonGroup,
    HelloTitle,
    Header,
    CardsWrapper
}