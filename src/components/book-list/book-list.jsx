import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import * as actions from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="list-unstyled row">
      {books.map((book) => (
        <BookListItem
          key={book.id}
          book={book}
          onAddToCart={() => onAddToCart(book.id)}
        />
      ))}
    </ul>
  );
};

const BookListContainer = (props) => {
  const { books, loading, error, fetchBooks, onAddToCart } = props;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) return <Spinner />;

  if (error) return <ErrorIndicator />;

  return <BookList books={books} onAddToCart={onAddToCart} />;
};

const mapStateToProps = ({ booksList: { books, loading, error } }) => (
  { books, loading, error }
);
const actionCreators = (dispatch, { bookstoreService }) => bindActionCreators({
  fetchBooks: actions.fetchBooks(bookstoreService),
  onAddToCart: actions.addBookToCart,
}, dispatch);

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, actionCreators),
)(BookListContainer);
