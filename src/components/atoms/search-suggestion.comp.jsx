import React from 'react';
import PropTypes from 'prop-types';
import { useDebounce } from 'use-debounce';
import routes from '../../utils/routes';
import { formatVnd } from '../../utils/helpers';
import products from '../../mock-data/products';

import { searchProduct } from './search-suggestion.utils';
import {
  Container,
  Item,
  ImageContainer,
  Name,
  Price,
  CrossPrice,
} from './search-suggestion.styled';

function SearchSuggestion({ searchKey, clearTextCb }) {
  // delayed value with useDebounce: https://github.com/xnimorz/use-debounce#simple-values-debouncing
  const [displayProducts] = useDebounce(() => searchProduct(products, searchKey, 5), 500);

  const onItemClick = () => {
    clearTextCb();
    displayProducts.length = 0;
  };

  return displayProducts.length ? (
    <Container>
      {displayProducts.map((product) => (
        <Item key={product.id} to={`${routes.product.path}/${product.id}`} onClick={onItemClick}>
          <ImageContainer>
            <img src={product.image} alt={product.name} />
          </ImageContainer>
          <Name>{product.name}</Name>
          <p>
            <Price>{product.price ? formatVnd(product.price) : 'Hàng sắp về'}</Price>
            {product.crossPrice && <CrossPrice>{formatVnd(product.crossPrice)}</CrossPrice>}
          </p>
        </Item>
      ))}
    </Container>
  ) : null;
}

SearchSuggestion.propTypes = {
  searchKey: PropTypes.string.isRequired,
  clearTextCb: PropTypes.func.isRequired,
};

export default SearchSuggestion;
