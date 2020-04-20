import React from 'react';
import ProductPreview from './product-preview.comp';
import DATA from './grid-products.data';

import { GridContainer } from './grid-products.styled';

function GridProducts() {
  return (
    <GridContainer>
      {DATA.slice(0, 20).map((product, id) => (
        <ProductPreview key={id} {...product} />
      ))}
    </GridContainer>
  );
}

export default GridProducts;
