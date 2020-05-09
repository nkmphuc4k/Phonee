import React from 'react';
import PropTypes from 'prop-types';
import { productProps } from '../../utils/prop-types';
import { useDispatch } from 'react-redux';
import { formatVnd } from '../../utils/helpers';
import { addProduct, takeout1Product, removeProduct } from '../../redux/cart/actions';

import Counter from './counter.comp';
import {
  ProductItem,
  ProductImage,
  ProductName,
  ProductPrice,
  RemoveItem,
  ImageFrame,
} from './cart-item.styled';

function CartItem({ product, amount }) {
  const dispatch = useDispatch();

  return (
    <ProductItem>
      <ProductImage>
        <RemoveItem onClick={() => dispatch(removeProduct(product))}>
          <ion-icon name="close-circle-outline" /> Xóa
        </RemoveItem>
        <ImageFrame>
          <img src={product.image} alt={product.name} />
        </ImageFrame>
      </ProductImage>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{formatVnd(product.price)}</ProductPrice>
      <Counter
        value={amount}
        min={1}
        onIncrement={() => dispatch(addProduct(product))}
        onDecrement={() => dispatch(takeout1Product(product))}
      />
    </ProductItem>
  );
}

CartItem.propTypes = {
  amount: PropTypes.number.isRequired,
  product: PropTypes.shape(productProps),
};

export default CartItem;
