import types from './types';
import { addProductToCart, removeProductFromCart, Takeout1ProductFromCart } from './utils';

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PRODUCT: {
      return {
        items: addProductToCart(state.items, payload),
      };
    }

    case types.TAKEOUT_1_PRODUCT: {
      return {
        items: Takeout1ProductFromCart(state.items, payload),
      };
    }

    case types.REMOVE_PRODUCT: {
      return {
        items: removeProductFromCart(state.items, payload),
      };
    }

    case types.EMPTY_CART: {
      return {
        items: [],
      };
    }

    default:
      return state;
  }
};
