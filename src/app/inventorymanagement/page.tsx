import React from 'react';
import ProductList from '../component/productlist';
import ActiveTabBar from '../component/activetab';
import './inventory.css'
import MainTabs from '../component/maintabs';
const Water = [
  { image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg', name: 'Milton Pacific Blue', price:199, stock:" 10 Units" },
  { image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg', name: 'Milton Pacific Blue', price: 249, stock: " 10 Units" },
  { image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg', name: 'Milton Pacific Blue', price: 299, stock:" 10 Units" },
  { image: 'https://www.bigbasket.com/media/uploads/p/l/40162837_2-milton-pacific-pet-fridge-plastic-water-bottle-blue.jpg', name: 'Milton Pacific Blue', price: 499, stock: " 10 Units" },
];

const Tshirts = [
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock: " 10 Units" },
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock:" 10 Units"  },
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock:" 10 Units"  },
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock: " 10 Units"  },
  
];
const Tops = [  
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock: " 10 Units" },
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock:" 10 Units"  },
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock:" 10 Units"  },
  { image: 'https://images.meesho.com/images/products/415868394/7dxvi_512.webp', name: 'Zabolo Formal Shirt', price: 699, stock: " 10 Units"  },]
const Electronics = [
  { image: 'https://www.portronics.com/cdn/shop/products/Modesk-1_1440x.jpg?v=1647446052', name: 'Mobile Holder', price: 249, stock: " 10 Units" },
  { image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/AI/GT/SK/21781701/l-shape-hdmi-converter-1000x1000.jpg', name: 'HDMI L Type Jointer', price: 199, stock: " 10 Units"  },
  { image: 'https://fetchnbuy.in/cdn/shop/products/biggear1copy_grande.png?v=1614069752', name: 'HDMI Jointer', price: 199, stock: " 10 Units" },
  { image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/BA/MN/RR/93278088/tv-out-cable-hdmi-male-to-female-adapter-for-lcd-led-tv-pc-and-laptop-hdmi-cable-black--1000x1000.jpg', name: 'Hdmi Male Female', price: 249, stock:" 10 Units" },
];



const Page: React.FC = () => {
  
  return (
  <div className='homepage'><MainTabs/><div className='div'>
  <ActiveTabBar/>
      <ProductList heading="Water Bottle" products={Water} />
          <ProductList heading="Shirts & Tops" products={Tshirts} />
            <ProductList heading={""}  products={Tops} />
          <ProductList heading="Electronics" products={Electronics} /></div>
          </div>
  )
};

export default Page;
