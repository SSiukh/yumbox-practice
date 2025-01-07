import styles from './Header.module.scss';
import CartButton from '../cartButton/CartButton';
import logo from '/logo.svg';

const Header = () => {
  return (
    <header>
      <svg>
        <use href={logo}></use>
      </svg>
      <CartButton />
    </header>
  );
};

export default Header;
