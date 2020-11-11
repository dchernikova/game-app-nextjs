import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import SkeletonImage from '../SkeletonImage';

import FadeInAnimation from '../../helpers/Animations/FadeIn';

const Img = styled.img`
  ${FadeInAnimation};

  max-width: 100%;
`;

const Image = ({ src, alt, aspectRatio }) => (
  <>
    {src ? (
      <Img
        src={src}
        alt={alt}
      />
    ) : (
      <SkeletonImage aspectRatio={aspectRatio} />
    )}
  </>
);

Image.propTypes = {
  src: T.string,
  alt: T.string,
};

Image.defaultProps = {
  alt: '',
};

export default Image
