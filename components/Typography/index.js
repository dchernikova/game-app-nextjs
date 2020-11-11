import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import { spacing } from '@material-ui/system';
import MUITypography from '@material-ui/core/Typography';

const textAlignMixin = ({ center, right }) => {
  if (center) return 'center';
  if (right) return 'right';
  return 'left'
};

const StyledTypography = styled(
  ({
     margin,
     marginX,
     marginY,
     marginTop,
     marginRight,
     marginBottom,
     marginLeft,
     uppercase,
     center,
     right,
     bold,
     ...rest
   }) => <MUITypography {...rest} />,
)`
  && {
    ${spacing};

    color: ${({ color, theme }) => color === 'inherit' ? 'inherit' : theme.color[color]};

    text-align: ${props => textAlignMixin(props)};
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

    font-weight: ${({ bold }) => (bold ? '600' : '400')};

    transition: color 0.2s;
  }
`;

const Typography = ({ children, color, bold, uppercase, ...props }) => (
  <StyledTypography
    bold={bold}
    color={color}
    uppercase={uppercase}
    {...props}
  >
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  color: T.string,
  bold: T.bool,
  uppercase: T.bool,
};

Typography.defaultProps = {
  color: 'primary',
};

export default Typography
