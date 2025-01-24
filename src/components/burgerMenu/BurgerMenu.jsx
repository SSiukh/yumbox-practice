import { useEffect, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import clsx from 'clsx';
import CartButton from '../cartButton/CartButton';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const BurgerMenu = ({ isOpen, openCart, totalPrice, count }) => {
  const [isShouldOpen, setIsShouldOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      setIsShouldOpen(false);
    } else {
      document.body.classList.remove('no-scoll');

      const timeout = setTimeout(() => {
        setIsShouldOpen(true);
      }, 250);

      return () => {
        clearTimeout(timeout);
      };
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div
      className={clsx(
        styles.burgerMenuOverlay,
        isShouldOpen && 'visually-hidden'
      )}
    >
      <div
        className={clsx(styles.burgerContainer, {
          [styles.burgerContainerOpen]: isOpen,
        })}
      >
        <CartButton
          count={count}
          openCart={openCart}
          ordinary={true}
          totalPrice={totalPrice}
        />
        <nav>
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
        </nav>
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
            <a href="">
              <FaLinkedinIn size={24} />
            </a>
          </li>
          <li className={styles.iconitem}>
            <a href="">
              <FaInstagram size={24} />
            </a>
          </li>
          <li className={styles.iconitem}>
            <a href="">
              <FaFacebookF size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
