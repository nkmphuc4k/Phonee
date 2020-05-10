import React, { useState, useCallback } from 'react';
import routes from '../../utils/routes';
import { useSelector } from 'react-redux';
import { selectAmountProduct } from '../../redux/cart/selectors';

import SearchSuggestion from '../atoms/search-suggestion.comp';
import { HeaderContainer, Logo, Form, SearchInput, SearchButton, CartIcon } from './header.styled';

function Header() {
  const amountProducts = useSelector(selectAmountProduct);
  const [searchKey, setSearchKey] = useState('');
  const clearTextCb = useCallback(() => setSearchKey(''), []);

  return (
    <HeaderContainer>
      <Logo to={routes.home.path}>Phonee</Logo>

      <Form>
        <SearchInput
          type="text"
          placeholder="Bạn tìm gì..."
          ariaLabel="Bạn tìm gì..."
          maxLength={40}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <SearchButton>
          <ion-icon name="search" />
        </SearchButton>
        <SearchSuggestion searchKey={searchKey} clearTextCb={clearTextCb} />
      </Form>

      <CartIcon to={routes.cart.path}>
        <ion-icon name="cart" />
        <span>({amountProducts})</span>
      </CartIcon>
    </HeaderContainer>
  );
}

export default Header;
