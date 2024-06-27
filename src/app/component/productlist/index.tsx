'use client'
import React, { useState } from 'react';
import ProductCard from '../Card';
import styles from './productlist.module.scss';

interface Product {
  image: string;
  name: string;
  price: number;
  stock: string;
}

interface ProductListProps {
  heading: string;
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ heading, products }) => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveProduct(index);
  };

  return (
    <div>
      <h2>{heading}</h2>
      <div className={styles.cardContainer}>
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`${styles.card} ${activeProduct === index ? styles.active : ''}`}
          >
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              stock={product.stock}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
