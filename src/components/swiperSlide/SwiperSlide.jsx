import styles from './SwiperSlide.module.scss';
import mobileBanner from '../../assets/mobile-banner.png';
import mobileBanner2x from '../../assets/mobile-banner-2x.png';
import desktopBanner from '../../assets/desktop-banner.png';
import desktopBanner2x from '../../assets/desktop-banner-2x.png';

const swiperSlide = () => {
  return (
    <div className={styles.slide}>
      <picture className={styles.picture}>
        <source
          srcSet={`${desktopBanner} 1x, ${desktopBanner2x} 2x`}
          media="(min-width: 1110px)"
        />
        <source
          srcSet={`${mobileBanner} 1x, ${mobileBanner2x} 2x`}
          media="(max-width: 1439px)"
        />
        <img src={desktopBanner} alt="project image" />
      </picture>
    </div>
  );
};

export default swiperSlide;
