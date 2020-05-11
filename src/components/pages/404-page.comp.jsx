import React from 'react';
import routes from '../../utils/routes';

import { PageContainer, Heading, StyledLink } from './404-page.styled';

function NotFoundPage() {
  return (
    <PageContainer>
      <Heading>Không tìm thấy trang</Heading>
      <StyledLink to={routes.product.path}>Trở về trang chủ</StyledLink>
    </PageContainer>
  );
}

export default NotFoundPage;
