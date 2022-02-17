import React from 'react';
import S from './Popover.styled';

// types
interface IPopoverProps {
    children: JSX.Element;
    triggerButton: JSX.Element;
}

export const Popover: React.FC<IPopoverProps> = ({children, triggerButton}): JSX.Element => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <S.Wrapper>
            <S.TriggerButton onClick={handleClick}>
                {triggerButton}
            </S.TriggerButton>
            <S.Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {children}
            </S.Popover>
        </S.Wrapper>
    )
}
