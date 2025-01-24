import styles from './ProductCard.module.scss';
import mobileBox from '../../assets/mobile-box.jpg';
import mobileBox2x from '../../assets/mobile-box-2x.jpg';
import desktopBox from '../../assets/desktop-box.jpg';
import desktopBox2x from '../../assets/desktop-box-2x.jpg';
import clsx from 'clsx';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const ProductCard = ({ id, price, weight, addItemToCart, cart }) => {
  const [mouseOn, setMouseOn] = useState(false);

  const isInCart = cart.some(object => {
    return object.id === id;
  });
  const currentElem = cart.find(object => object.id === id);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
    >
      <picture className={styles.image}>
        <source
          media="(min-width: 1440px)"
          srcSet={`${desktopBox} 1x, ${desktopBox2x} 2x`}
        />
        <source
          media="(max-width: 1439px)"
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
        onClick={() => addItemToCart({ id, price, weight, qty: 1 })}
        className={clsx(styles.addToCart, {
          [styles.onCard]: mouseOn || isInCart,
        })}
      >
        {isInCart ? (
          <span className={styles.inCartButton}>
            <FaRegCheckCircle className={styles.buttonIcon} size={24} />
            <span className={styles.inCartButtonText}>
              В кошику{' '}
              <span className={styles.inCartButtonTextEmphasise}>
                {currentElem.qty} шт
              </span>{' '}
              за{' '}
              <span className={styles.inCartButtonTextEmphasise}>
                {currentElem.qty * currentElem.price} грн
              </span>
            </span>
          </span>
        ) : mouseOn ? (
          `Добавити в кошик`
        ) : (
          `${price} грн`
        )}
      </button>
    </div>
  );
};

export default ProductCard;
