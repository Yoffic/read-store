import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item';

const BookList = ({ books, bookstoreService, booksLoaded }) => {
  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, [bookstoreService, booksLoaded]);

  return (
    <ul>
      {books.map((book) => <BookListItem key={book.id} book={book}/>)}
    </ul>
  );
};

const mapStateToProps = ({ books }) => ({ books });
const createActions = { booksLoaded };

export default withBookstoreService()(
  connect(mapStateToProps, createActions)(BookList)
);