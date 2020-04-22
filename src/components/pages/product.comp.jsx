import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeAllFilters, resetSorting } from '../../redux/product-filter-sorting/actions';

import GridProducts from '../atoms/grid-products.comp';
import FilterBrands from '../atoms/filter-brands.comp';
import FilterPrice from '../atoms/filter-price.comp';
import FilterChips from '../atoms/filter-chips.comp';
import SortSelector from '../atoms/sort-selector.comp';

import { PageContainer, Flex } from './product.styled';

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAllFilters());
    dispatch(resetSorting());
  }, [dispatch]);

  return (
    <PageContainer>
      <FilterBrands />
      <Flex>
        <FilterPrice />
        <SortSelector />
      </Flex>
      <FilterChips />
      <GridProducts />
    </PageContainer>
  );
}

export default Product;
