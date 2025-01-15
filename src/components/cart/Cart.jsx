import styles from './Cart.module.scss';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';
import ProductCardCart from '../cartProductCard/ProductCardCart';

// Видалення реалізувати за допомогою filter!
const Cart = ({ isOpen, openCart, totalPrice }) => {
  return (
    <div className={clsx(styles.cartOverlay, isOpen && styles.opened)}>
      <div className={styles.cartContainer}>
        <div className={styles.cartTopContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Корзина</h2>
            <IoClose className={styles.close} onClick={openCart} size={25} />
          </div>
          <div className={styles.cardContainer}>
            <ProductCardCart
              name="Yumbox 21 сет суперкачний
                суперсет"
              weight={1500}
              price={799}
              qty={1}
            />
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.bottomTitle}>
            <p className={styles.delivery}>Доставка</p>
            <p className={styles.deliveryPrice}>50 ₴</p>
          </div>
          <button className={styles.button}>оформити за {totalPrice} ₴</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
