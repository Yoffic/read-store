import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book, onAddToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <li className="col-md-6">
      <div className="book-list-item d-flex flex-column flex-md-row">
        <div className="book-cover">
          <img src={coverImage} alt="book cover" />
        </div>
        <div className="book-details mt-2 d-flex flex-column justify-content-between align-items-start">
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
          <button
            onClick={onAddToCart}
            className="btn btn-info add-to-cart">Add to cart</button>
        </div>
      </div>
    </li>
  );
};

export default BookListItem;