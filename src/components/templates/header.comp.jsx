import React from 'react';
import routes from '../../utils/routes';

import {
  HeaderContainer,
  LogoWrapper,
  LogoImage,
  LogoText,
  LoginWrapper,
  NavList,
  NavItem,
  StyledNavLink,
  CartWrapper,
} from './header.styled';

const NavLink = (props) => {
  return <StyledNavLink exact activeClassName="active" {...props} />;
};

function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper to={routes.home.path}>
        <LogoImage
          src="https://static.wixstatic.com/media/84770f_f1972fc2e2bd4ea9b339ada1691a8a55~mv2.gif"
          alt="logo"
        />
        <LogoText>Phonee</LogoText>
      </LogoWrapper>
      <LoginWrapper to={routes.login.path}>
        <ion-icon name="person-circle" />
        <span>Log In</span>
      </LoginWrapper>
      <nav>
        <NavList>
          <NavItem>
            <NavLink to={routes.home.path}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={routes.shop.path}>Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={routes.contactUs.path}>Contact Us</NavLink>
          </NavItem>
        </NavList>
      </nav>
      <CartWrapper>
        <ion-icon name="cart-outline" />
        <span>(0)</span>
      </CartWrapper>
    </HeaderContainer>
  );
}

export default Header;
