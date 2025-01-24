import styles from './ProductCardCart.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import cartImg from '../../assets/cart-img.png';

const cartProductCard = ({
  name,
  weight,
  price,
  qty,
  deleteFromCart,
  id,
  decreaseQty,
  addQty,
}) => {
  const convPrice = price.toLocaleString().replace(',', ' ');

  return (
    <div className={styles.card}>
      <div className={styles.topContent}>
        <div className={styles.mainContent}>
          <img width={43} height={47} src={cartImg} alt="product" />
          <div className={styles.data}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.weight}>{weight} гр</p>
          </div>
        </div>
        <RiDeleteBinLine
          onClick={() => deleteFromCart(id)}
          className={styles.icon}
          size={20}
        />
      </div>
      <div className={styles.bottomContent}>
        <p className={styles.price}>{convPrice} ₴</p>
        <div className={styles.counter}>
          <button
            onClick={() => decreaseQty(id)}
            className={styles.counterButton}
          >
            <FaMinus size={13} />
          </button>
          <span className={styles.counterItem}>{qty}</span>
          <button className={styles.counterButton} onClick={() => addQty(id)}>
            <FaPlus size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default cartProductCard;
