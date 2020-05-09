import types from './types';

export const addProduct = (payload) => ({
  type: types.ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload) => ({
  type: types.REMOVE_PRODUCT,
  payload,
});

export const takeout1Product = (payload) => ({
  type: types.TAKEOUT_1_PRODUCT,
  payload,
});

export const emptyCart = () => ({
  type: types.EMPTY_CART,
});
