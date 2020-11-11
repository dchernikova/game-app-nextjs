import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import Link from '../../../Link';
import Typography from '../../../Typography';

const StyledLink = styled(({ underline, color, noPadding, ...rest }) => <Link {...rest} />)`
  display: inline-flex;
  position: relative;

  padding: ${({ noPadding }) => noPadding ? '0' : '24px 16px'};

  text-decoration: none;
  color: ${({ color, theme }) => color === 'primary' ? theme.color.primary : theme.color.secondary};

  &::after {
    content: '';

    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 2px;

    background-color: transparent;

    transition: background-color 0.2s;
  }

  &.active {
    &::after {
      background-color: ${({ underline, theme }) => underline && theme.color.secondary};
    }
  }

  &:hover {
    color: ${({ color, theme }) => color === 'primary' ? theme.color.secondary : theme.color.primary};

    &::after {
      background-color: ${({ underline, theme }) => underline && theme.color.secondary};
    }
  }
`;

const LinkComponent = ({ children, color, href, underline, uppercase, noPadding }) => (
  <StyledLink
    href={href}
    color={color}
    underline={underline}
    noPadding={noPadding}
  >
    <Typography
      component="span"
      color="inherit"
      uppercase={uppercase}
    >
      {children}
    </Typography>
  </StyledLink>
);

LinkComponent.propTypes = {
  color: T.string,
  href: T.string,
  underline: T.bool,
  uppercase: T.bool,
  noPadding: T.bool,
};

LinkComponent.defaultProps = {
  color: 'primary',
};

export default LinkComponent
