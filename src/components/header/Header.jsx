import React from 'react';
import './Header.css';
import Logo from '../../asstes/Logo.png';
import Nav from './Nav';

const Header = () => {
  return (
    <div className='container-header'>
      <div className='logo'>
        <a href="/"><img src={Logo} alt="" /></a>
      </div>
      <div className='nav-menu'><Nav /></div>
    </div>
  );
};

export default React.memo(Header);
