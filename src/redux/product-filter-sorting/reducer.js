import types from './types';

import { priceFilters, sorting } from './data';

const initialState = {
  brandsToFilter: [],
  priceFilter: priceFilters[0],
  sorting: sorting[0],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SORTING: {
      return {
        ...state,
        sorting: payload,
      };
    }

    case types.SET_PRICE_FILTER: {
      return {
        ...state,
        priceFilter: payload,
      };
    }

    case types.TOGGLE_BRAND: {
      const { brandsToFilter } = state;

      if (brandsToFilter.includes(payload)) {
        return {
          ...state,
          brandsToFilter: brandsToFilter.filter((x) => x !== payload),
        };
      } else {
        return {
          ...state,
          brandsToFilter: [...brandsToFilter, payload],
        };
      }
    }

    case types.REMOVE_ALL_FILTERS: {
      return {
        ...state,
        brandsToFilter: [],
        priceFilter: priceFilters[0],
      };
    }

    default:
      return state;
  }
};
