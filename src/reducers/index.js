import updateBooksList from './bookslist';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    booksList: updateBooksList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;