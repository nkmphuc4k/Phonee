import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  color: ${(p) => p.theme.styles.colorPrimary};
  background: ${(p) => p.theme.styles.background};
  display: flex;
  align-items: center;
  padding: 0.5rem 5rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const LogoWrapper = styled(Link)`
  position: relative;
  padding-right: 9rem;
`;

export const LogoImage = styled.img`
  display: block;
  width: 5rem;
  height: 9rem;
`;

export const LogoText = styled.span`
  font-size: 3rem;
  font-weight: ${(p) => p.theme.fw.semiBold};
  letter-spacing: -0.2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2.5rem;
`;

export const LoginWrapper = styled(Link)`
  margin: auto auto auto 10rem;
  display: flex;
  align-items: center;

  ion-icon {
    margin-right: 0.7rem;
    font-size: 3.2rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 2rem;
`;

export const StyledNavLink = styled(NavLink)`
  opacity: 0.7;
  transition: opacity ${(p) => p.theme.trans.fast4};

  &:hover, &.active {
    opacity: 1;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;

  ion-icon {
    font-size: 2.8rem;
    display: block;
  }
`;
