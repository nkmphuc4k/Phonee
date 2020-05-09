import { combineReducers } from 'redux';

import productFilterSortingReducer from './product-filter-sorting/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  productFilterSorting: productFilterSortingReducer,
  cart: cartReducer,
});
