import { useState } from 'react';
import data from '../data/data.json';
import Header from './header/Header';
import Hero from './hero/Hero';
import BestSellers from './bestSellers/BestSellers';
import BurgerMenu from './burgerMenu/BurgerMenu';
import Cart from './cart/Cart';

const App = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(!cartIsOpen);
    setBurgerIsOpen(false);
  };

  const openBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
    setCartIsOpen(false);
  };

  return (
    <div className="container">
      <Cart isOpen={cartIsOpen} openCart={openCart} />
      <BurgerMenu openCart={openCart} isOpen={burgerIsOpen} />
      <Header
        openCart={openCart}
        openBurger={openBurger}
        isOpen={burgerIsOpen}
        cartButtonNotVisible={cartIsOpen}
      />
      <Hero topItems={data.filter(item => item.top === true)} />
      <BestSellers />
    </div>
  );
};

export default App;

// ctrl + space for import
