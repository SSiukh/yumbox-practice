import styles from './CartButton.module.scss';

const CartButton = ({ count, totalPrice, openCart }) => {
  return (
    <div onClick={openCart} className={styles.button}>
      <span className={styles.counter}>{count}2</span>
      <span className={styles.price}>{totalPrice}2023 грн</span>
    </div>
  );
};

export default CartButton;
