import styles from './CartButton.module.scss';
import clsx from 'clsx';

const CartButton = ({ count, totalPrice, openCart, ordinary, notVisible }) => {
  return (
    <button
      onClick={openCart}
      className={clsx(styles.button, {
        [styles.ordinary]: ordinary,
        [styles.notVisible]: notVisible,
      })}
    >
      <span className={clsx(styles.counter, notVisible && styles.counterOpen)}>
        {count}
      </span>
      <span className={clsx(styles.price, notVisible && styles.priceOpen)}>
        {totalPrice} грн
      </span>
    </button>
  );
};

export default CartButton;
