import { useState, useEffect } from 'react';
import styles from './BestSellers.module.scss';
import ProductCard from '../productCard/ProductCard';
import data from '../../data/data.json';

const BestSellers = () => {
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

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Найчастіше замовляють</h2>
      <div className={styles.cardContainer}>
        {isMobile ? (
          <ProductCard
            id={data[0].id}
            price={data[0].price}
            weight={data[0].weight}
            className={styles.card}
          />
        ) : (
          data.map(({ id, price, weight }) => {
            return (
              <ProductCard
                key={id}
                id={id}
                price={price}
                weight={weight}
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
