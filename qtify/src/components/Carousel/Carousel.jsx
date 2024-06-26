import React, { useEffect } from 'react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from './CarouselRight/CarouselRight';

const Controls = ({ data }) => {
  let swiper = useSwiper();

  useEffect(() => {
    //swiper.slideTo(index, speed, runCallbacks(optional))
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
        navigation={true}
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
