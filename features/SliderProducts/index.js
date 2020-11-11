import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '@material-ui/core/Box';

import Slide from '../../components/Slide';
import Typography from '../../components/Typography';

const StyledBox = styled(Box)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  padding: 8px 16px;

  background-color: rgba(0, 0, 40, 0.4);
  color: ${({ theme }) => theme.color.primary};

  transition: background-color 0.2s;
`;

const Wrapper = styled.div`
  a:hover {
    ${StyledBox} {
      background-color: rgba(0, 0, 40, 0.6);
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const params = {
  loop: true,
  slidesPerView: 2.5,
  centeredSlides: true,
  spaceBetween: 32,

  breakpoints: {
    640: {
      slidesPerView: 4.5,
    },
    1024: {
      slidesPerView: 5.5,
    },
    1200: {
      slidesPerView: 7.5,
    },
  },
};

const SliderProducts = ({ slides = [] }) => (
  <Wrapper>
    <Swiper {...params}>
      {slides.map(({ id, name, price, images }) => (
        <SwiperSlide key={id}>
          <Slide
            overlay
            aspectRatio={[3, 4]}
            href={`/product/${id}`}
            imageSrc={images.preview}
          >
            <StyledBox>
              <Typography
                color="inherit"
                variant="body1"
                center
                bold
              >
                {name}
              </Typography>

              <Typography
                color="inherit"
                variant="body2"
                center
              >
                {price}
              </Typography>
            </StyledBox>
          </Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  </Wrapper>
);

export default SliderProducts
