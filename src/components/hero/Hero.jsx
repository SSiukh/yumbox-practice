import { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import styles from './Hero.module.scss';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import SwiperSlide from '../swiperSlide/SwiperSlide';
import clsx from 'clsx';

const Hero = ({ topItems }) => {
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
        {topItems.map(item => {
          return (
            <div key={item.id} className="swiper-slide">
              <SwiperSlide id={item.id} price={item.price} />
            </div>
          );
        })}
      </div>

      <div className={styles.buttons}>
        <div className={`${styles.prevButton} button-prev`}>
          <IoArrowBackCircleOutline
            className={clsx(styles.prevIconButton, {
              [styles.disabled]: !activeIndex,
            })}
            size={44}
          />
        </div>
        <div className={styles.pagination}>
          <span
            className={clsx(styles.paginationItem, {
              [styles.paginationActiveItem]: activeIndex === 0,
            })}
          ></span>
          <span
            className={clsx(styles.paginationItem, {
              [styles.paginationActiveItem]: activeIndex === 1,
            })}
          ></span>
          <span
            className={clsx(styles.paginationItem, {
              [styles.paginationActiveItem]: activeIndex === 2,
            })}
          ></span>
        </div>
        <div className={clsx(styles.nextButton, 'button-next')}>
          <IoArrowBackCircleOutline
            className={clsx(styles.nextIconButton, {
              [styles.disabled]: activeIndex === 2,
            })}
            size={44}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
