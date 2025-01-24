import { useEffect, useState } from 'react';
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
  cleanCart,
  closeCart,
}) => {
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

  const handleOrder = () => {
    console.log(cart);
    cleanCart();
    closeCart();
  };

  return (
    <div
      className={clsx(styles.cartOverlay, isShouldOpen && 'visually-hidden')}
    >
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
          [styles.cartContainerClose]: !isOpen,
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
          <button onClick={handleOrder} className={styles.button}>
            оформити за {totalPrice} ₴
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
