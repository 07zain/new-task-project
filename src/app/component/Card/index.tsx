import React from 'react';
import styles from './card.module.scss'
import { HiOutlineDotsVertical } from 'react-icons/hi';
interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  stock: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, stock }) => {
  return (
    <div className={styles.card}>
      <img  src={image} alt={name} className={styles.image} />
      
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Stock: {stock}</p>
      </div>
      <div className={styles.menuIcon}>
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};


export default ProductCard;
