import React from 'react';
import './header.css';
import Logo from '../../../asset/logo.png';

export const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="image" />
    </div>
  );
};
