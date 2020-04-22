import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBrandsFiltered } from '../../redux/product-filter-sorting/selectors';
import { toggleBrand } from '../../redux/product-filter-sorting/actions';
import brands from '../../mock-data/brands';

import { Container, ImageContainer } from './filter-brands.styled';

function FilterBrands() {
  const brandsToFilter = useSelector(selectBrandsFiltered);
  const dispatch = useDispatch();

  return (
    <Container>
      {brands.map((brand) => (
        <ImageContainer
          key={brand.id}
          title={brand.name}
          isChecked={brandsToFilter.includes(brand)}
          onClick={() => dispatch(toggleBrand(brand))}
        >
          <img src={brand.image} alt={brand.name} />
        </ImageContainer>
      ))}
    </Container>
  );
}

export default FilterBrands;
