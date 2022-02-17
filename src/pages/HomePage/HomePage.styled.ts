import styled from "styled-components";
import {
    Button as muiButton,
    ButtonGroup as muiButtonGroup
} from '@mui/material';

const
Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    .infinite-scroll {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

`,
Button = styled(muiButton)`&&& {
    font-size: 18px;
}`,
ButtonGroup = styled(muiButtonGroup)`&&&{
    margin: 30px auto;

    a {
        text-decoration: none;
        color: inherit;
    }
}`,
HelloTitle = styled.div``,
Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`,
Loading = styled.div`
    margin: 0 auto;
    text-align: center;
    color: green;
`

export default { 
    Wrapper,
    Button,
    ButtonGroup,
    HelloTitle,
    Header,
    Loading
}