import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import Box from '@material-ui/core/Box';

import Link from '../Link';

import FadeInAnimation from '../../helpers/Animations/FadeIn';
import { getAspectRatio } from '../../helpers/_utils/getAspectRatio';

const StyledBox = styled(({ aspectRatio, image, overlay, ...rest }) => <Box {...rest} />)`
  ${FadeInAnimation};

  position: relative;
  overflow: hidden;

  display: flex;

  width: 100%;

  background: ${({ overlay }) => overlay && 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),'} url(${({ image }) => image}) no-repeat center / cover;
  border-radius: 16px;

  &::before {
    content: '';

    display: block;

    width: 100%;
    padding-top: ${({ aspectRatio }) => `${getAspectRatio(aspectRatio)}%`};
  }
`;

const Slide = ({
  slideComponent,
  aspectRatio,
  imageSrc,
  overlay,
  children,
  ...props
}) => (
  <StyledBox
    component={slideComponent}
    aspectRatio={aspectRatio}
    image={imageSrc}
    overlay={overlay}
    {...props}
  >
    {children}
  </StyledBox>
);

Slide.propTypes = {
  slideComponent: T.elementType,
  aspectRatio: T.array,
  image: T.string,
  overlay: T.bool,
};

Slide.defaultProps = {
  slideComponent: Link,
};

export default Slide
