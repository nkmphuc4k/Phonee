import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectItems = createSelector(
  [selectCart], 
  (cart) => cart.items,
);

export const selectAmountProduct = createSelector(
  [selectItems], 
  (items) => 
    items.reduce(
      (acc, cur) => acc + cur.amount,
    0),
);

export const selectTotalMoney = createSelector(
  [selectItems], 
  (items) =>
    items.reduce(
      (acc, cur) => acc + cur.amount * cur.product.price, 
    0),
);

export const selectGuest = createSelector(
  [selectCart],
  (cart) => cart.guest,
)

