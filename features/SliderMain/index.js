import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import styled from 'styled-components';

import Slide from '../../components/Slide';
import Wrapper from '../../components/Wrapper';
import Skeleton from '../../components/Skeleton';
import SkeletonImage from '../../components/SkeletonImage';

SwiperCore.use([Pagination]);

const StyledWrapper = styled(Wrapper)`
  .swiper-pagination {
    bottom: 16px;

    & > .swiper-pagination-bullet {
      position: relative;

      margin: 0 16px;
      opacity: 1;

      background: ${({ theme }) => theme.color.primary};

      &::after {
        content: '';
        display: block;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;

        width: 16px;
        height: 16px;

        border: 1px solid ${({ theme }) => theme.color.primary};
      }
    }

    & > .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.color.secondary};

      &::after {
        border-color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
`;

const SliderMain = ({ slides }) => (
  <StyledWrapper>
    {slides ? (
      <Swiper
        loop
        pagination={{ clickable: true }}
      >
        {slides.map(({ id, images }) => (
          <SwiperSlide key={id}>
            <Slide
              href={`/product/${id}`}
              imageSrc={images.main}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (<SkeletonImage />)}
  </StyledWrapper>
);

export default SliderMain
