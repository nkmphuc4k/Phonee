import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBrandsFiltered,
  selectPriceFilter,
  selectSorting,
} from '../../redux/product-filter-sorting/selectors';

export const useFilterProducts = (products) => {
  const brandsFiltered = useSelector(selectBrandsFiltered);
  const priceFilter = useSelector(selectPriceFilter);

  const productIdsIncluded = brandsFiltered.flatMap((x) => x.productIds); // filter product ids by brands

  const filteredProducts = products
    .filter((prod) => (productIdsIncluded.length > 0 ? productIdsIncluded.includes(prod.id) : true)) // filter by brands
    .filter(priceFilter.callback); // filter by price

  return filteredProducts;
};

export const useSortingProducts = (products) => {
  const sorting = useSelector(selectSorting);
  sorting.value && products.sort(sorting.value); // sorting
  return products;
};

export const usePagingProducts = (products, pagingSize = 20) => {
  const [curPage, setCurPage] = useState(1);

  const presentProducts = products.slice(0, curPage * pagingSize);
  const noProductsRemain = products.length - presentProducts.length;
  const oneMorePage = () => setCurPage(curPage + 1);

  const brandsFiltered = useSelector(selectBrandsFiltered);
  const priceFilter = useSelector(selectPriceFilter);
  const sorting = useSelector(selectSorting);

  useEffect(() => setCurPage(1), [brandsFiltered, priceFilter, sorting]); // reset paging when filters or sorting change

  return {
    presentProducts,
    noProductsRemain,
    oneMorePage,
  };
};
