import React from 'react';
import { HiOutlineFilter, HiOutlineBell, HiOutlineCog, HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineViewColumns } from 'react-icons/hi2';
import { FiMenu } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import styles from './activetab.module.scss';


const ActiveTabBar: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>All</button>
        <button className={styles.tab}>Active</button>
        <button className={styles.tab}>Draft</button>
      </div>
      <div className={styles.searchContainer}>
     <div className={styles.icon}>
          <HiOutlineSearch />
          </div>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
       
      </div>
      <button className={styles.iconButton}>
        <HiOutlineFilter />Filter
      </button>
      <button className={styles.iconButton}>
        <HiOutlineViewColumns /> Columns
      </button>
      <button className={styles.icons}>
      <RxDashboard />

      </button>
      <button className={styles.icons}>
      <FiMenu />
      </button>
    </div>
  );
};

export default ActiveTabBar;
