import styles from './ProductCard.module.scss';
import mobileBox from '../../assets/mobile-box.jpg';
import mobileBox2x from '../../assets/mobile-box-2x.jpg';
import desktopBox from '../../assets/destop-box.jpg';
import desktopBox2x from '../../assets/desktop-box-2x.jpg';
import { useState } from 'react';

const ProductCard = ({ id, price, weight }) => {
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <div className={styles.card}>
      <picture className={styles.image}>
        <source
          media="(min-width: 1440)"
          srcSet={`${desktopBox} 1x, ${desktopBox2x} 2x`}
        />
        <source
          media="(max-width: 1439)"
          srcSet={`${mobileBox} 1x, ${mobileBox2x} 2x`}
        />
        <img src={desktopBox} alt="product" />
      </picture>
      <p className={styles.title}>
        Yumbox
        <br />
        {id} сет
      </p>
      <p className={styles.weight}>{weight} гр</p>
      <button
        onMouseEnter={() => setMouseOn(true)}
        onMouseLeave={() => setMouseOn(false)}
        className={styles.addToCart}
      >
        {mouseOn ? `Добавити в кошик` : `${price} грн`}
        {/*  items from local storage if true : text and icon, щоб міняти назавжди поки не видалять з кошика*/}
      </button>
    </div>
  );
};

export default ProductCard;
