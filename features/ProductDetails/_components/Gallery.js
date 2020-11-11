import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonBase from '@material-ui/core/ButtonBase';

import Slide from '../../../components/Slide';

import SkeletonGallery from './SkeletonGallery';

const StyledButton = styled(({ active, ...rest }) => <ButtonBase {...rest} />)`
  && {
    overflow: visible;

    margin-top: 32px;
    margin-bottom: 32px;

    &::before {
      border: 1px solid ${({ active, theme }) => (active ? theme.color.secondary : 'transparent')};

      transition: border-color 0.2s;
    }

    &::after {
      content: '';
      opacity: ${({ active }) => (active ? 1 : 0)};

      position: absolute;
      top: -16px;
      right: 0;
      left: 0;
      margin: auto;

      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 16px 16px 16px;
      border-color: transparent transparent ${({ theme }) => theme.color.secondary} transparent;

      transition: opacity 0.2s;
    }
  }
`;

const params = {
  spaceBetween: 32,
  slidesPerView: 3,
};

const Gallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageIsOpen, setImageIsOpen] = useState(false);

  const openImage = () => setImageIsOpen(true);
  const closeImage = () => setImageIsOpen(false);

  useEffect(() => {
    setActiveImage(images && images[0]);
  }, [images]);

  const handleSlideClick = (image, i) => {
    setActiveImage(image);
    setImageIndex(i);
  };

  return (
    <>
      {(activeImage && images && images.length !== 0) ? (
        <>
          <Slide
            onClick={openImage}
            imageSrc={activeImage}
            slideComponent={ButtonBase}
          />

          {imageIsOpen && (
            <Lightbox
              images={images}
              startIndex={imageIndex}
              onClose={closeImage}
            />
          )}

          <Swiper {...params}>
            {images.map((image, i) => (
              <SwiperSlide key={image}>
                <Slide
                  imageSrc={image}
                  active={activeImage === image}
                  onClick={() => handleSlideClick(image, i)}
                  slideComponent={StyledButton}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <SkeletonGallery />
      )}
    </>
  )
};

Gallery.propTypes = {
  images: T.arrayOf(T.string),
};

export default Gallery
