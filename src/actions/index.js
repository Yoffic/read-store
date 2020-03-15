export const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

export const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

export const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error,
});

export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(actions.booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(actions.booksLoaded(data)))
    .catch((err) => dispatch(actions.booksError(err)));
};
