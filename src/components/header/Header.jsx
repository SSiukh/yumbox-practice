import styles from './Header.module.scss';
import CartButton from '../cartButton/CartButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Header = ({ openBurger, isOpen, openCart, cartButtonNotVisible }) => {
  return (
    <div className={styles.headerOverline}>
      <header className={styles.header}>
        <img className={styles.logo} src="/logo.svg" alt="logotype" />
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
        <div onClick={openBurger} className={styles.burgerMenu}>
          <span className={styles.burgerMenuText}>Меню</span>
          {isOpen ? (
            <IoClose className={styles.burgerIcon} size={24} />
          ) : (
            <GiHamburgerMenu className={styles.burgerIcon} size={22} />
          )}
        </div>
        <CartButton openCart={openCart} notVisible={cartButtonNotVisible} />
      </header>
    </div>
  );
};

export default Header;
