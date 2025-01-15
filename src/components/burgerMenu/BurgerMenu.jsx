import styles from './BurgerMenu.module.scss';
import clsx from 'clsx';
import CartButton from '../cartButton/CartButton';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const BurgerMenu = ({ isOpen, openCart, totalPrice, count }) => {
  return (
    <div
      className={clsx(styles.burgerMenuOverlay, { [styles.opened]: isOpen })}
    >
      <div className={styles.burgerContainer}>
        <CartButton
          count={count}
          openCart={openCart}
          ordinary={true}
          totalPrice={totalPrice}
        />
        <ul className={styles.linkList}>
          <li>
            <a className={styles.link} href="">
              Каталог
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Кейтеринг
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Про нас
            </a>
          </li>
          <li>
            <a className={styles.link} href="">
              Контакти
            </a>
          </li>
        </ul>
        <address className={styles.addres}>
          <a className={styles.email} href="mailto:yumbox.lutsk@gmail.com">
            yumbox.lutsk@gmail.com
          </a>
          <a className={styles.telNumber} href="tel:+380938239293">
            +380 93 823 92 93
          </a>
        </address>
        <ul className={styles.iconsList}>
          <li className={styles.iconitem}>
            <FaLinkedinIn size={24} />
          </li>
          <li className={styles.iconitem}>
            <FaInstagram size={24} />
          </li>
          <li className={styles.iconitem}>
            <FaFacebookF size={24} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
