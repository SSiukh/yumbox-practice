import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem('cart'));
    return data ?? [];
  });

  const saveCart = updatedCart => {
    try {
      window.localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const addItem = item => {
    const prevCart = [...cart];

    const existingIndex = prevCart.findIndex(object => object.id === item.id);

    if (existingIndex === -1) {
      prevCart.push({ ...item, qty: 1 });
    } else {
      prevCart[existingIndex].qty++;
    }

    saveCart(prevCart);
  };

  const removeItem = id => {
    const prevCart = [...cart];
    const newCart = prevCart.filter(object => {
      return object.id !== id;
    });

    saveCart(newCart);
  };

  const addQty = id => {
    const prevCart = [...cart];
    const newCart = prevCart.map(object => {
      if (object.id === id) {
        object.qty++;
      }

      return object;
    });

    saveCart(newCart);
  };

  const decreaseQty = id => {
    const prevCart = [...cart];
    const newCart = prevCart.map(object => {
      if (object.id === id && object.qty !== 1) {
        object.qty--;
      }

      return object;
    });

    saveCart(newCart);
  };

  return { cart, addItem, removeItem, addQty, decreaseQty };
};

export default useCart;
