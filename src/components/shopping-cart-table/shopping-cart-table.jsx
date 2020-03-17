import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const ShoppingCartTable = (props) => {
  const {
    items,
    total,
    onIncrease,
    onDecrease,
    onDelete
  } = props;

  const renderRow = (item) => {
    const { id, title, count, totalPrice } = item;
    return (
      <tr key={id}>
        <td>
          {title}
          <div className="mt-2">
            <button
              onClick={() => onDecrease(id)}
              className="btn btn-outline-warning btn-sm">
              <i className="fa fa-minus-circle" />
            </button>
            <button
              onClick={() => onIncrease(id)}
              className="btn btn-outline-success btn-sm ml-1">
              <i className="fa fa-plus-circle" />
            </button>
            <button
              onClick={() => onDelete(id)}
              className="btn btn-outline-danger btn-sm ml-1">
              <i className="fa fa-trash-o" />
            </button>
          </div>
        </td>
        <td className="text-center">{count}</td>
        <td className="text-center">${totalPrice}</td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table table-responsive">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col" className="text-center">Count</th>
            <th scope="col" className="text-center">Price</th>
          </tr>
        </thead>

        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="text-right h5 mr-2">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => ({
  items: cartItems,
  total: orderTotal,
});

const createActions = {
  onIncrease: actions.addBookToCart,
  onDecrease: actions.decreaseBookQuantity,
  onDelete: actions.removeBookFromCart,
};

export default connect(mapStateToProps, createActions)(ShoppingCartTable);
