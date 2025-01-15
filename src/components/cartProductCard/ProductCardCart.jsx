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
        <p className={styles.price}>{price} ₴</p>
        <div className={styles.counter}>
          <FaMinus
            onClick={() => decreaseQty(id)}
            className={styles.counterButton}
            size={13}
          />
          <span className={styles.counterItem}>{qty}</span>
          <FaPlus
            onClick={() => addQty(id)}
            className={styles.counterButton}
            size={13}
          />
        </div>
      </div>
    </div>
  );
};

export default cartProductCard;
