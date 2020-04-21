import { createSelector } from 'reselect';

const selectFilterSorting = (state) => state.productFilterSorting;

export const selectSorting = createSelector(
  [selectFilterSorting],
  (filterSorting) => filterSorting.sorting,
);

export const selectPriceFilter = createSelector(
  [selectFilterSorting],
  (filterSorting) => filterSorting.priceFilter,
);

export const selectBrandsFiltered = createSelector(
  [selectFilterSorting],
  (filterSorting) => filterSorting.brandsToFilter,
);
