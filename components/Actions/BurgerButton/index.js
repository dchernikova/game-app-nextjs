import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import MenuIcon from '@material-ui/icons/Menu';

import Link from '../../Link';
import Button from './../_components/Button';

import headerLinks from '../../../data/header';

const StyledPopper = styled(Popper)`
  z-index: 2;
`;

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setIsOpen((open) => !open);

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
      >
        <MenuIcon />
      </Button>

      <StyledPopper
        open={isOpen}
        transition
        disablePortal
        anchorEl={anchorRef.current}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper>
              <MenuList component="nav">
                {headerLinks.map(({ title, href }) => (
                  <MenuItem
                    key={title}
                    component={Link}
                    href={href}
                  >
                    {title}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Fade>
        )}
      </StyledPopper>
    </>
  )
};

export default BurgerButton
