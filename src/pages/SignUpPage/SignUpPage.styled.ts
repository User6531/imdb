import styled from "styled-components";
import {

} from '@mui/material';

const
Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`,
Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,
Title = styled.h1`
    text-align: center;
`

export default {
    Wrapper,
    Row,
    Title
}