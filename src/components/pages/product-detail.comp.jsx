import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import products from '../../mock-data/products';
import { formatVnd } from '../../utils/helpers';
import routes from '../../utils/routes';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/actions';

import productSpec from './product-detail.data';
import {
  PageContainer,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductName,
  SpecHeading,
  SpecList,
  SpecItem,
  SpecName,
  PriceWrapper,
  Price,
  CrossPrice,
  BuyButton,
} from './product-detail.styled';

function ProductDetail() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = products.find((x) => x.id === productId);

  const history = useHistory();
  if (!product) {
    history.push(''); // navigate to products page when there's no product found
    return null;
  }

  return (
    <PageContainer>
      <ProductName>{product.name}</ProductName>

      <ProductDetails>
        <ProductImage>
          <img src={product.image} alt={product.name} />
        </ProductImage>

        <ProductInfo>
          <PriceWrapper>
            <Price>{product.price ? formatVnd(product.price) : 'Hàng sắp về'}</Price>
            {product.crossPrice && <CrossPrice>{formatVnd(product.crossPrice)}</CrossPrice>}
          </PriceWrapper>

          <SpecHeading>Thông số kỹ thuật</SpecHeading>
          <SpecList>
            {productSpec.map((spec) => (
              <SpecItem key={spec.name}>
                <SpecName>{spec.name}: </SpecName>
                <span>{spec.value}</span>
              </SpecItem>
            ))}
          </SpecList>

          <BuyButton to={routes.cart.path} onClick={() => dispatch(addProduct(product))}>
            Mua ngay
          </BuyButton>
        </ProductInfo>
      </ProductDetails>
    </PageContainer>
  );
}

export default ProductDetail;
