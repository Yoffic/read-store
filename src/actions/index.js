export const booksLoaded = (newBooks) => ({
  type: 'BOOKS_LOADED',
  payload: newBooks,
});

export const booksRequested = () => ({
  type: 'BOOKS_REQUESTED',
});

export const booksError = (error) => ({
  type: 'BOOKS_ERROR',
  payload: error,
});
