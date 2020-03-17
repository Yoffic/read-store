import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './main-header.css';

const mapStateToProps = ({ shoppingCart: { itemsTotal, orderTotal } }) => ({
  itemsTotal,
  orderTotal,
});

const MainHeader = ({ itemsTotal, orderTotal }) => {
  return (
    <header className="main-header d-flex flex-column flex-md-row justify-content-between align-items-center">
      <Link to='/'>
        <div className="logo">ReadStore</div>
      </Link>
      <Link to="/cartpage">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {itemsTotal} items (${orderTotal})
        </div>
      </Link>
    </header>
  );
};

export default connect(mapStateToProps, null)(MainHeader);