import React from 'react';
import GridProducts from '../atoms/grid-products.comp';
import FilterBrands from '../atoms/filter-brands.comp';
import FilterPrice from '../atoms/filter-price.comp';
import FilterChips from '../atoms/filter-chips.comp';
import SortSelector from '../atoms/sort-selector.comp';

import { PageContaienr, Flex } from './product.styled';

function Product() {
  return (
    <PageContaienr>
      <FilterBrands />
      <Flex>
        <FilterPrice />
        <SortSelector />
      </Flex>
      <FilterChips />
      <GridProducts />
    </PageContaienr>
  );
}

export default Product;
