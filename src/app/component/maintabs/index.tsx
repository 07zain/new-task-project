
import React from 'react';
import { FaDownload, FaUpload, FaEllipsisV, FaPlus } from 'react-icons/fa';
import { PiToggleLeftFill } from 'react-icons/pi';
import './maintabs.module.css';


const MainTabs: React.FC = () => {
  return (
    <div className="header-with-buttons">
      <h1>Products</h1>
      <div className="buttons">
        <button className="button white-bg"><PiToggleLeftFill /> &nbsp;
Show Statistic</button>
        <button className="button white-bg">
          <FaDownload /> Export
        </button>
        <button className="button white-bg">
          <FaUpload /> Import
        </button>
        <button className="button white-bg">
          <FaEllipsisV />
        </button>
        <button className="button blue-bg">
          <FaPlus /> New Product
        </button>
      </div>
    </div>
  );
};

export default MainTabs;
