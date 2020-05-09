import React from 'react';
import routes from '../../utils/routes';
import { useSelector } from 'react-redux';
import { selectAmountProduct } from '../../redux/cart/selectors';

import { HeaderContainer, Logo, Form, SearchInput, SearchButton, CartIcon } from './header.styled';

function Header() {
  const amountProducts = useSelector(selectAmountProduct);

  return (
    <HeaderContainer>
      <Logo to={routes.home.path}>Phonee</Logo>

      <Form>
        <SearchInput
          type="text"
          placeholder="Bạn tìm gì..."
          ariaLabel="Bạn tìm gì..."
          maxLength={40}
        />
        <SearchButton>
          <ion-icon name="search" />
        </SearchButton>
      </Form>

      <CartIcon to={routes.cart.path}>
        <ion-icon name="cart" />
        <span>({amountProducts})</span>
      </CartIcon>
    </HeaderContainer>
  );
}

export default Header;
