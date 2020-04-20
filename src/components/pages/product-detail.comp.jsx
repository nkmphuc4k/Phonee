import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../mock-data/products';

function ProductDetail() {
  const { productId } = useParams();
  const productName = products.find((x) => x.id === productId).name;

  return <h1>Product Detail for: <br /> {productName}</h1>;
}

export default ProductDetail;
