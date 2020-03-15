import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import * as actions from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map((book) => <BookListItem key={book.id} book={book}/>)}
    </ul>
  );
};

const BookListContainer = (props) => {
  const { books, loading, error, fetchBooks } = props;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) return <Spinner />;

  if (error) return <ErrorIndicator />;

  return <BookList books={books} />;
};

const mapStateToProps = ({ books, loading, error }) => (
  { books, loading, error }
);
const createActions = (dispatch, { bookstoreService }) => ({
  fetchBooks: actions.fetchBooks(bookstoreService, dispatch),
});

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, createActions),
)(BookListContainer);
