import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { priceFilters } from '../../redux/product-filter-sorting/data';
import { selectPriceFilter } from '../../redux/product-filter-sorting/selectors';
import { setPriceFilter } from '../../redux/product-filter-sorting/actions';

import { Container, Label, FilterLabel } from './filter-price.styled';

function FilterPrice() {
  const curPriceFilter = useSelector(selectPriceFilter);
  const dispatch = useDispatch();

  return (
    <Container>
      <Label>Chọn mức giá:</Label>

      {priceFilters.map((priceFilter, index) => (
        <FilterLabel
          key={index}
          isChecked={priceFilter === curPriceFilter}
          onClick={() => dispatch(setPriceFilter(priceFilter))}
        >
          {priceFilter.label}
        </FilterLabel>
      ))}
    </Container>
  );
}

export default FilterPrice;
