import { combineReducers } from 'redux';

import productFilterSortingReducer from './product-filter-sorting/reducer';

export default combineReducers({
  productFilterSorting: productFilterSortingReducer,
});
