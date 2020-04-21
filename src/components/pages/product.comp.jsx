import React from 'react';
import GridProducts from '../atoms/grid-products.comp';
import FilterBrands from '../atoms/filter-brands.comp';
import FilterPrice from '../atoms/filter-price.comp';
import FilterChips from '../atoms/filter-chips.comp';

import { PageContaienr } from './product.styled';

function Product() {
  return (
    <PageContaienr>
      <FilterBrands />
      <FilterPrice />
      <FilterChips />
      <GridProducts />
    </PageContaienr>
  );
}

export default Product;
