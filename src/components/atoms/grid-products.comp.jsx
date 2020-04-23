import React from 'react';
import routes from '../../utils/routes';
import { useFilterProducts, useSortingProducts, usePagingProducts } from './grid-products.hooks';
import ProductPreview from './product-preview.comp';
import products from '../../mock-data/products';

import { GridContainer, Alert, ViewAll, ViewMore } from './grid-products.styled';

function GridProducts() {
  const filteredProducts = useFilterProducts(products);
  const sortedProducts = useSortingProducts(filteredProducts);
  const { presentProducts, noProductsRemain, oneMorePage } = usePagingProducts(sortedProducts);

  return presentProducts.length > 0 ? (
    <>
      <GridContainer>
        {presentProducts.map((product) => (
          <ProductPreview key={product.id} {...product} />
        ))}
      </GridContainer>

      {noProductsRemain !== 0 && (
        <ViewMore onClick={oneMorePage}>
          Xem thêm {noProductsRemain} điện thoại <ion-icon name="caret-down" />
        </ViewMore>
      )}
    </>
  ) : (
    <p>
      <Alert>Không có sản phẩm nào phù hợp !</Alert>
      <ViewAll to={routes.home.path}>Xem tất cả {products.length} điện thoại</ViewAll>
    </p>
  );
}

export default GridProducts;
