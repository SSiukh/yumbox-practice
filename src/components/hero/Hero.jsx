import { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import styles from './Hero.module.scss';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import SwiperSlide from '../swiperSlide/SwiperSlide';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      direction: 'horizontal',
      loop: false,
      speed: 500,
      spaceBetween: 50,

      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
    });

    swiper.on('slideChange', () => {
      setActiveIndex(swiper.activeIndex);
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {/* array map */}
        <div className="swiper-slide">
          <SwiperSlide />
        </div>
        <div className="swiper-slide">
          <SwiperSlide />
        </div>
        <div className="swiper-slide">
          <SwiperSlide />
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={`${styles.prevButton} button-prev`}>
          <IoArrowBackCircleOutline
            className={`${styles.prevIconButton} ${
              activeIndex === 0 && styles.disabled
            }`}
            size={44}
          />
        </div>
        <div className={styles.pagination}>
          <span
            className={`${styles.paginationItem} ${
              activeIndex === 0 && styles.paginationActiveItem
            }`}
          ></span>
          <span
            className={`${styles.paginationItem} ${
              activeIndex === 1 && styles.paginationActiveItem
            }`}
          ></span>
          <span
            className={`${styles.paginationItem} ${
              activeIndex === 2 && styles.paginationActiveItem
            }`}
          ></span>
        </div>
        <div className={`${styles.nextButton} button-next`}>
          <IoArrowBackCircleOutline
            className={`${styles.nextIconButton} ${
              activeIndex === 2 && styles.disabled
            }`}
            size={44}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
