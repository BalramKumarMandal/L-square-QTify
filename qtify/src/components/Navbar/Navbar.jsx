import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.png';

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoDiv}>
        <img src={LogoImg} alt="logo" width={67} />
      </div>
      <Search search={'Search a song of your choice'} />
      <Button children="Give Feedback" />
    </nav>
  );
}

export default Navbar;
