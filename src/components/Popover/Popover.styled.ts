import styled from 'styled-components';
import { Popover as muiPopover } from '@mui/material';

const
Wrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`,
Popover = styled(muiPopover)`
    & .MuiPopover-root {
        padding: 15px;
    }
`,
TriggerButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        fill: white;
    }
`

export default {
    Wrapper,
    Popover,
    TriggerButton
}