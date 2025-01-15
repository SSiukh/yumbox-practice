import styles from './Cart.module.scss';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';
import ProductCardCart from '../cartProductCard/ProductCardCart';

const Cart = ({
  isOpen,
  openCart,
  cart,
  totalPrice,
  deleteFromCart,
  decreaseQty,
  addQty,
}) => {
  return (
    <div className={clsx(styles.cartOverlay, isOpen && styles.opened)}>
      <div className={styles.cartContainer}>
        <div className={styles.cartTopContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Корзина</h2>
            <IoClose className={styles.close} onClick={openCart} size={25} />
          </div>
          <div className={styles.cardContainer}>
            {cart.map(object => {
              return (
                <ProductCardCart
                  key={object.id}
                  id={object.id}
                  name={`Yumbox ${object.id} сет суперкачний
                суперсет`}
                  weight={object.weight}
                  price={object.price * object.qty}
                  qty={object.qty}
                  deleteFromCart={deleteFromCart}
                  decreaseQty={decreaseQty}
                  addQty={addQty}
                />
              );
            })}
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
