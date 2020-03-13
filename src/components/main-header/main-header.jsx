import React from 'react';

import './main-header.css';

const MainHeader = ({ numItems, total }) => {
  return (
    <header className="main-header row">
      <a className="logo text-dark" href="/">ReadStore</a>
      <a className="shopping-cart" href="/">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default MainHeader;