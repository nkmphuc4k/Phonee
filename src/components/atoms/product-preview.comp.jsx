import React from 'react';
import { productProps } from '../../utils/prop-types';
import routes from '../../utils/routes';
import { formatVnd } from '../../utils/helpers';

import {
  Container,
  ImageContainer,
  Name,
  PriceWrapper,
  Price,
  CrossPrice,
} from './product-preview.styled';

function ProductPreview({ id, name, price, crossPrice, image }) {
  return (
    <Container to={`${routes.product.path}/${id}`}>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <PriceWrapper>
        <Price>{price ? formatVnd(price) : 'Hàng sắp về'}</Price>
        {crossPrice && <CrossPrice>{formatVnd(crossPrice)}</CrossPrice>}
      </PriceWrapper>
    </Container>
  );
}

ProductPreview.propTypes = productProps;

export default ProductPreview;
