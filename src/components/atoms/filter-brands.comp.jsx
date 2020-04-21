import React, { useState } from 'react';
import PropTypes from 'prop-types';
import brands from '../../mock-data/brands';

import { Container, ImageContainer } from './filter-brands.styled';

const FilterBrandItem = ({ id, name, image }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ImageContainer title={name} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)}>
      <img src={image} alt={name} />
    </ImageContainer>
  );
};

function FilterBrands() {
  return (
    <Container>
      {brands.map((brand) => (
        <FilterBrandItem key={brand.id} {...brand} />
      ))}
    </Container>
  );
}

FilterBrandItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FilterBrands;
