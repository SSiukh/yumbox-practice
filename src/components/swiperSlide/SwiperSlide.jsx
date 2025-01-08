import styles from './SwiperSlide.module.scss';
import mobileBanner from '../../assets/mobile-banner.png';
import mobileBanner2x from '../../assets/mobile-banner-2x.png';
import desktopBanner from '../../assets/desktop-banner.png';
import desktopBanner2x from '../../assets/desktop-banner-2x.png';
import sticker from '../../assets/sticker.png';

const swiperSlide = ({ id, price }) => {
  return (
    <div className={styles.slide}>
      <img className={styles.sticker} src={sticker} alt="sticker" />
      <picture className={styles.picture}>
        <source
          srcSet={`${desktopBanner} 1x, ${desktopBanner2x} 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${mobileBanner} 1x, ${mobileBanner2x} 2x`}
          media="(max-width: 1439px)"
        />
        <img src={desktopBanner} alt="project image" />
      </picture>
      <div className={styles.info}>
        <span className={styles.infoSet}>СЕТ 21 {id}</span>
        <span className={styles.infoPrice}>{price}799 ГРН</span>
      </div>
    </div>
  );
};

export default swiperSlide;
