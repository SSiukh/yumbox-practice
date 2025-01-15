import { useState, useEffect } from 'react';
import styles from './BestSellers.module.scss';
import ProductCard from '../productCard/ProductCard';
import data from '../../data/data.json';
import Swiper from 'swiper';

const BestSellers = ({ addItemToCart, cart }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      new Swiper('.best-sellers-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        speed: 500,
      });
    }
  }, [isMobile]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Найчастіше замовляють</h2>
      <div className={styles.cardContainer}>
        {isMobile ? (
          <div className="best-sellers-swiper">
            <div className="swiper-wrapper">
              {data.map(({ id, price, weight }) => {
                return (
                  <div key={id} className="swiper-slide">
                    <ProductCard
                      id={id}
                      price={price}
                      weight={weight}
                      addItemToCart={addItemToCart}
                      cart={cart}
                      className={styles.card}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          data.map(({ id, price, weight }) => {
            return (
              <ProductCard
                key={id}
                id={id}
                price={price}
                weight={weight}
                addItemToCart={addItemToCart}
                cart={cart}
                className={styles.card}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default BestSellers;
