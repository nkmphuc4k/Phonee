import types from './types';
import { addProductToCart, removeProductFromCart, Takeout1ProductFromCart } from './utils';

const initialState = {
  items: [],
  guest: {
    gender: null,
    name: '',
    phone: '',
    province: null,
    district: null,
    ward: null,
    street: '',
    requirement: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PRODUCT: {
      return {
        ...state,
        items: addProductToCart(state.items, payload),
      };
    }

    case types.TAKEOUT_1_PRODUCT: {
      return {
        ...state,
        items: Takeout1ProductFromCart(state.items, payload),
      };
    }

    case types.REMOVE_PRODUCT: {
      return {
        ...state,
        items: removeProductFromCart(state.items, payload),
      };
    }

    case types.EMPTY_CART: {
      return {
        ...state,
        items: [],
      };
    }

    case types.SUBMIT_GUEST: {
      return {
        ...state,
        guest: payload,
      };
    }

    default:
      return state;
  }
};
