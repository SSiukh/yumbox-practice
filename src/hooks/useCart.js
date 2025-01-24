import { useState, useEffect } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem('cart'));
    return data ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const saveCart = updatedCart => {
    try {
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

  const cleanCart = () => {
    saveCart([]);
  };

  return { cart, addItem, removeItem, addQty, decreaseQty, cleanCart };
};

export default useCart;
