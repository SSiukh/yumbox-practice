import { useEffect } from 'react';
import styles from './Cart.module.scss';
import clsx from 'clsx';
import ProductCardCart from '../cartProductCard/ProductCardCart';
import Header from '../header/Header';

const Cart = ({
  isOpen,
  openCart,
  cart,
  totalPrice,
  deleteFromCart,
  decreaseQty,
  addQty,
  openBurger,
  burgerIsOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scoll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const logOrder = () => {
    console.log(cart);
  };

  return (
    <div className={clsx(styles.cartOverlay, !isOpen && 'visually-hidden')}>
      <Header
        count={cart.length}
        openCart={openCart}
        openBurger={openBurger}
        isOpen={burgerIsOpen}
        cartButtonNotVisible={isOpen}
        totalPrice={totalPrice}
      />

      <div
        className={clsx(styles.cartContainer, {
          [styles.cartContainerOpen]: isOpen,
        })}
      >
        <div className={styles.cartTopContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Корзина</h2>
            <button onClick={openCart} className={styles.close}>
              <span
                className={clsx(styles.closeElem, isOpen && styles.closeFirst)}
              ></span>
              <span
                className={clsx(styles.closeElem, isOpen && styles.closeSecond)}
              ></span>
            </button>
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
          <button onClick={logOrder} className={styles.button}>
            оформити за {totalPrice} ₴
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
