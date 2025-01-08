import styles from './Header.module.scss';
import CartButton from '../cartButton/CartButton';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
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
      <div className={styles.burgerMenu}>
        <span className={styles.burgerMenuText}>Меню</span>
        <GiHamburgerMenu className={styles.burgerIcon} size={22} />
      </div>
      <CartButton />
    </header>
  );
};

export default Header;
