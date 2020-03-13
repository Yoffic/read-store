import React from 'react';
import { Link } from 'react-router-dom';

import './main-header.css';

const MainHeader = ({ numItems, total }) => {
  return (
    <header className="main-header row">
      <Link to=''>
        <div className="logo text-dark">ReadStore</div>
      </Link>
      <Link to="/cartpage">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default MainHeader;