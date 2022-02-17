import styled from "styled-components";
import {
    Button as muiButton,
    ButtonGroup as muiButtonGroup
} from '@mui/material';

const
Wrapper = styled.div`
    width: 100%;
    height: 100%;
`,
Button = styled(muiButton)`&&& {
    font-size: 36px;
    
    a {
        text-decoration: none;
        color: inherit;
    }
}`,
ButtonGroup = styled(muiButtonGroup)`&&&{
    margin: 50px auto;

}`

export default {
    Wrapper,
    Button,
    ButtonGroup
}