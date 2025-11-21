'use client'
import React from 'react';
import { useState } from 'react';
import { FaPencilAlt, FaTrash, FaChevronDown } from 'react-icons/fa';
import './component/producttable/ProductTable.module.css';
import ActiveTabBar from './component/activetab';
import MainTabs from './component/maintabs';
import Pagination from './component/pagination'
import { LuChevronsUpDown } from 'react-icons/lu';

interface Product {
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  units: string;
  status: string;
}

interface ProductTableProps {
  products: Product[];
}




const HomePage: React.FC<ProductTableProps> = ({  }) => {
  const products = [
    {
      image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg',
      name: 'MILTON Pacif Blue Plastic Fridge Water',
      description: 'Easy to Carry outdoor,has good grip',
      category: 'Water Bottle',
      price: 499,
      stock: 12,
      units: 'pcs',
      status: 'Active',
    },
    {
      image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp',
      name: 'Zabolo Formal Shirt for Men Regular Fit Shirt',
      description: 'Black Solid casual shirt,has a spread collar',
      category: 'Shirts & Tops',
      price: 699,
      stock: 8,
      units: 'pcs',
      status: 'Active',
    },
    {
      image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp',
      name: 'Zabolo Formal Shirt for Men Regular Fit Shirt',
      description: 'Black Solid casual shirt,has a spread collar',
      category: 'Shirts & Tops',
      price: 699,
      stock: 8,
      units: 'pcs',
      status: 'Active',
    },
    {
      image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg',
      name: 'MILTON Pacif Blue Plastic Fridge Water',
      description: 'Easy to Carry outdoor,has good grip',
      category: 'Water Bottle',
      price: 499,
      stock: 12,
      units: 'pcs',
      status: 'Active',
    },
    {
      image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg',
      name: 'MILTON Pacif Blue Plastic Fridge Water',
      description: 'Easy to Carry outdoor,has good grip',
      category: 'Water Bottle',
      price: 499,
      stock: 12,
      units: 'pcs',
      status: 'Active',
    }, {
      image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg',
      name: 'MILTON Pacif Blue Plastic Fridge Water',
      description: 'Easy to Carry outdoor,has good grip',
      category: 'Water Bottle',
      price: 499,
      stock: 12,
      units: 'pcs',
      status: 'Active',
    },
   
  ];
  const ITEMS_PER_PAGE = 10;
   const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <><MainTabs /><ActiveTabBar /><table className="product-table">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Product &nbsp; <LuChevronsUpDown /></th>
          <th>Category</th>
          <th>Selling Price</th>
          <th>Stock</th>
          <th>Units</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td><input type="checkbox" /></td>
            <td>
              <div className="product-info">
                <img className='img' src={product.image} alt={product.name} />
                <div>
                  <p style={{color:"blue"}}>{product.name}</p>
                  <small>{product.description}</small>
                </div>
              </div>
            </td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.units}</td>
            <td><div  style={{backgroundColor:"lightgreen", borderRadius:"20px", padding:"5px"}}>{product.status}</div></td>
            <td>
              <FaPencilAlt className="action-icon" />
              <FaTrash className="action-icon" />
              <FaChevronDown className="action-icon" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </>
  );
};

export default HomePage;
