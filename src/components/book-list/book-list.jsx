import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css';

const BookList = ({ books, loading, bookstoreService, booksLoaded }) => {
  useEffect(() => {
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }, [bookstoreService, booksLoaded]);

  if (loading) return <Spinner />;

  return (
    <ul className="book-list">
      {books.map((book) => <BookListItem key={book.id} book={book}/>)}
    </ul>
  );
};

const mapStateToProps = ({ books, loading }) => ({ books, loading });
const createActions = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, createActions),
)(BookList);
