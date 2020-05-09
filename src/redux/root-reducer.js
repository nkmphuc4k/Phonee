import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productFilterSortingReducer from './product-filter-sorting/reducer';
import cartReducer from './cart/reducer';

const persistConfig = {
  key: 'phonee',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  productFilterSorting: productFilterSortingReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);

// Followed this: https://github.com/ZhangMYihua/lesson-26-complete/blob/master/src/redux/root-reducer.js