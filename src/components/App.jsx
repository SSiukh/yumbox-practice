import { useState } from 'react';
import data from '../data/data.json';
import Header from './header/Header';
import Hero from './hero/Hero';
import BestSellers from './bestSellers/BestSellers';
import BurgerMenu from './burgerMenu/BurgerMenu';
import Cart from './cart/Cart';
import useCart from '../hooks/useCart';

const App = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const { cart, addItem, removeItem, addQty, decreaseQty } = useCart();

  const openCart = () => {
    setCartIsOpen(!cartIsOpen);
    setBurgerIsOpen(false);
  };

  const openBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
    setCartIsOpen(false);
  };

  const countPrice = () => {
    const totalPrice = cart.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);

    return totalPrice > 999 ? totalPrice - totalPrice / 10 : totalPrice;
  };

  const totalPrice = countPrice();

  return (
    <div className="container">
      <Header
        count={cart.length}
        openCart={openCart}
        openBurger={openBurger}
        isOpen={burgerIsOpen}
        cartButtonNotVisible={cartIsOpen}
        totalPrice={totalPrice}
      />
      <main>
        <Cart
          openBurger={openBurger}
          burgerIsOpen={burgerIsOpen}
          isOpen={cartIsOpen}
          openCart={openCart}
          cart={cart}
          totalPrice={totalPrice}
          deleteFromCart={removeItem}
          decreaseQty={decreaseQty}
          addQty={addQty}
        />
        <BurgerMenu
          count={cart.length}
          openCart={openCart}
          isOpen={burgerIsOpen}
          totalPrice={totalPrice}
        />

        <Hero topItems={data.filter(item => item.top === true)} />
        <BestSellers addItemToCart={addItem} cart={cart} />
      </main>
    </div>
  );
};

export default App;

// ctrl + space for import
