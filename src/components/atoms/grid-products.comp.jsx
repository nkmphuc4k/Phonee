import React from 'react';
import routes from '../../utils/routes';
import { useSelector } from 'react-redux';
import {
  selectBrandsFiltered,
  selectPriceFilter,
  selectSorting,
} from '../../redux/product-filter-sorting/selectors';
import ProductPreview from './product-preview.comp';
import products from '../../mock-data/products';

import { GridContainer, Alert, ViewAll } from './grid-products.styled';

function GridProducts() {
  const brandsFiltered = useSelector(selectBrandsFiltered);
  const priceFilter = useSelector(selectPriceFilter);
  const sorting = useSelector(selectSorting);

  const productIdsIncluded = brandsFiltered.flatMap((x) => x.productIds); // filter product ids by brands

  const presentProducts = products
    .filter((prod) => (productIdsIncluded.length > 0 ? productIdsIncluded.includes(prod.id) : true)) // filter by brands
    .filter(priceFilter.callback); // filter by price
  sorting.value && presentProducts.sort(sorting.value); // sorting

  return (
    <>
      {presentProducts.length > 0 ? (
        <GridContainer>
          {presentProducts.map((product) => (
            <ProductPreview key={product.id} {...product} />
          ))}
        </GridContainer>
      ) : (
        <p>
          <Alert>Không có sản phẩm nào phù hợp !</Alert>
          <ViewAll to={routes.home.path}>Xem tất cả {products.length} điện thoại</ViewAll>
        </p>
      )}
    </>
  );
}

export default GridProducts;
