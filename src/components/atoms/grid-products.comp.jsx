import React from 'react';
import ProductPreview from './product-preview.comp';
import products from '../../mock-data/products';

import { GridContainer } from './grid-products.styled';

function GridProducts() {
  return (
    <GridContainer>
      {products.slice(0, 20).map((product) => (
        <ProductPreview key={product.id} {...product} />
      ))}
    </GridContainer>
  );
}

export default GridProducts;
