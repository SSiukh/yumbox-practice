import styles from './CartButton.module.scss';
import clsx from 'clsx';

const CartButton = ({ count, totalPrice, openCart, ordinary, notVisible }) => {
  return (
    <div
      onClick={openCart}
      className={clsx(styles.button, {
        [styles.ordinary]: ordinary,
        [styles.notVisible]: notVisible,
      })}
    >
      <span className={styles.counter}>{count}2</span>
      <span className={styles.price}>{totalPrice}2023 грн</span>
    </div>
  );
};

export default CartButton;
