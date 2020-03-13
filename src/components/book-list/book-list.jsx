import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import * as actions from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = (props) => {
  const {
    books,
    loading,
    error,
    bookstoreService,
    booksLoaded,
    booksRequested,
    booksError,
  } = props;

  useEffect(() => {
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }, [bookstoreService, booksLoaded, booksRequested, booksError]);

  if (loading) return <Spinner />;

  if (error) return <ErrorIndicator />;

  return (
    <ul className="book-list">
      {books.map((book) => <BookListItem key={book.id} book={book}/>)}
    </ul>
  );
};

const mapStateToProps = ({ books, loading, error }) => (
  { books, loading, error }
);
const createActions = {
  booksLoaded: actions.booksLoaded,
  booksRequested: actions.booksRequested,
  booksError: actions.booksError,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, createActions),
)(BookList);
