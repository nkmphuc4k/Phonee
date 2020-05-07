import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../mock-data/products';
import { formatVnd } from '../../utils/helpers';
import routes from '../../utils/routes';

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

const productSpec = [
  { name: 'Màn hình', value: 'IPS LCD, 6.5", HD+' },
  { name: 'Hệ điều hành', value: 'ColorOS 6.1 (Android 9.0)' },
  { name: 'Camera sau', value: 'Chính 12 MP & Phụ 2 MP, 2 MP' },
  { name: 'Camera trước', value: '8 MP' },
  { name: 'CPU', value: 'MediaTek Helio P35 8 nhân' },
  { name: 'RAM', value: '4 GB' },
  { name: 'Bộ nhớ trong', value: '128GB' },
  { name: 'Thẻ nhớ', value: 'MicroSD, hỗ trợ tối đa 256 GB' },
  { name: 'Thẻ SIM', value: '2 Nano SIM, Hỗ trợ 4G' },
  { name: 'Dung lượng pin', value: '4230 mAh' },
];

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((x) => x.id === productId);

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
              <SpecItem>
                <SpecName>{spec.name}: </SpecName>
                <span>{spec.value}</span>
              </SpecItem>
            ))}
          </SpecList>

          <BuyButton to={routes.cart.path}>Mua ngay</BuyButton>
        </ProductInfo>
      </ProductDetails>
    </PageContainer>
  );
}

export default ProductDetail;
