const updatedCartItems = (items, newItem, idx) => {
  if (newItem.count === 0) {
    return items.filter(({ id }) => id !== newItem.id);
  }
  if (idx < 0) {
    return [...items, newItem];
  }
  return [
    ...items.slice(0, idx),
    newItem,
    ...items.slice(idx + 1)
  ];
};

const updateCartItem = (item = {}, book, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    totalPrice = 0,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    totalPrice: totalPrice + (book.price * quantity),
  };
};

const updateOrder = (bookId, state, quantity) => {
  const {
    booksList: { books },
    shoppingCart: { cartItems },
  } = state;

  const book = books.find(({ id }) => id === bookId);
  const idx = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[idx];

  const newItem = updateCartItem(item, book, quantity);
  const newCartItems = updatedCartItems(cartItems, newItem, idx);
  const newOrderTotal = newCartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const newItemsTotal = newCartItems.reduce((sum, item) => sum + item.count, 0);
  return {
    cartItems: newCartItems,
    orderTotal: newOrderTotal,
    itemsTotal: newItemsTotal,
  };
}

const updateShoppingCart = (state, action) => {
  if (!state) {
    return { cartItems: [], orderTotal: 0, itemsTotal: 0 };
  }
  switch (action.type) {
    case 'ADD_BOOK':
      return updateOrder(action.payload, state, 1);
    case 'DECREASE_BOOK_QUANTITY':
      return updateOrder(action.payload, state, -1);
    case 'REMOVE_BOOK':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(action.payload, state, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;