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

export const addBookToCart = (id) => ({
  type: 'ADD_BOOK',
  payload: id,
});

export const decreaseBookQuantity = (id) => ({
  type: 'DECREASE_BOOK_QUANTITY',
  payload: id,
});
export const removeBookFromCart = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

export const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};