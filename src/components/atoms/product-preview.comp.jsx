import React from 'react';
import PropTypes from 'prop-types';
import { formatVnd } from '../../utils/helpers';

import {
  Container,
  ImageContainer,
  Name,
  PriceWrapper,
  Price,
  CrossPrice,
} from './product-preview.styled';

function ProductPreview({ name, price, crossPrice, image }) {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <PriceWrapper>
        <Price>{formatVnd(price)}</Price>
        {crossPrice && <CrossPrice>{formatVnd(crossPrice)}</CrossPrice>}
      </PriceWrapper>
    </Container>
  );
}

ProductPreview.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  crossPrice: PropTypes.number,
  image: PropTypes.string.isRequired,
};

ProductPreview.defaultProps = {
  name: 'iPhone 11 Pro 256GB',
  price: 34990000,
  crossPrice: 36990000,
  image: 'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-400x400.jpg',
};

export default ProductPreview;
