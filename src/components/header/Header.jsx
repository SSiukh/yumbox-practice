import styles from './Header.module.scss';
import CartButton from '../cartButton/CartButton';
import clsx from 'clsx';

const Header = ({
  count,
  openBurger,
  isOpen,
  openCart,
  cartButtonNotVisible,
  totalPrice,
}) => {
  return (
    <div className={styles.headerOverline}>
      <div
        className={clsx(
          styles.container,
          cartButtonNotVisible && styles.cartContainer
        )}
      >
        <header className={styles.header}>
          <img className={styles.logo} src="/logo.svg" alt="logotype" />
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
          <button onClick={openBurger} className={styles.burgerMenu}>
            <span className={styles.burgerMenuText}>Меню</span>
            <div className={styles.burgerIcon}>
              <span
                className={clsx(
                  styles.burgerIconBurger,
                  isOpen && styles.burgerIconClose
                )}
              ></span>
            </div>
          </button>
          <CartButton
            count={count}
            openCart={openCart}
            notVisible={cartButtonNotVisible}
            totalPrice={totalPrice}
          />
        </header>
      </div>
    </div>
  );
};

export default Header;
