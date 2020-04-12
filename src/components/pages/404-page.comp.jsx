import React from 'react';
import routes from '../../utils/routes';
import { Link } from 'react-router-dom';

import { PageContainer, Heading, Para } from './404-page.styled';

function NotFoundPage() {
  return (
    <PageContainer>
      <Heading>Không tìm thấy trang</Heading>
      <Link to={routes.product.path}>Tiếp tục mua hàng</Link>
    </PageContainer>
  );
}

export default NotFoundPage;
