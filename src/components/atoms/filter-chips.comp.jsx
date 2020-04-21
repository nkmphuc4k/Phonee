import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { brands, priceFilters } from '../../redux/product-filter-sorting/data';
import {
  selectPriceFilter,
  selectBrandsFiltered,
} from '../../redux/product-filter-sorting/selectors';
import {
  toggleBrand,
  setPriceFilter,
  removeAllFilters,
} from '../../redux/product-filter-sorting/actions';

import { Chip } from './filter-chips.styled';

function FilterChips() {
  const brandsToFilter = useSelector(selectBrandsFiltered);
  const priceFilter = useSelector(selectPriceFilter);
  const dispatch = useDispatch();

  const hasFilterBrand = brandsToFilter.length > 0;
  const hasFilterPrice = priceFilter !== priceFilters[0];

  return (
    <div>
      {brands.map(
        (brand) =>
          brandsToFilter.includes(brand) && (
            <Chip key={brand.id} onClick={() => dispatch(toggleBrand(brand))}>
              {brand.name}
            </Chip>
          ),
      )}

      {hasFilterPrice && (
        <Chip onClick={() => dispatch(setPriceFilter(priceFilters[0]))}>{priceFilter.label}</Chip>
      )}

      {(hasFilterBrand || hasFilterPrice) && (
        <Chip deleteAll onClick={() => dispatch(removeAllFilters())}>
          Xóa tất cả
        </Chip>
      )}
    </div>
  );
}

export default FilterChips;
