import React from 'react';
import GridProducts from '../atoms/grid-products.comp';
import FilterBrands from '../atoms/filter-brands.comp';

import { PageContaienr } from './product.styled';

function Product() {
  return (
    <PageContaienr>
      <FilterBrands />
      <GridProducts />
    </PageContaienr>
  );
}

export default Product;
