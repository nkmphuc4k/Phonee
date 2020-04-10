import React from 'react';
import routes from '../../utils/routes';
import { Link } from 'react-router-dom';

import {
  FooterContainer,
  ServiceWrapper,
  PhoneNumber,
  LinksWrapper,
  IconsWrapper,
  Copyright,
} from './footer.styled';

function Footer() {
  return (
    <FooterContainer>
      <ServiceWrapper>
        <p>Customer Service:</p>
        <PhoneNumber>123-456-7890</PhoneNumber>
      </ServiceWrapper>
      <LinksWrapper>
        <Link to={routes.shop.path}>Shop</Link>
        <Link to={routes.contactUs.path}>Shipping & Return</Link>
        <Link to={routes.contactUs.path}>Contact</Link>
      </LinksWrapper>
      <IconsWrapper>
        <a href="https://stackoverflow.com/users/9787887" title="Stackoverflow">
          <ion-icon name="logo-stackoverflow" />
        </a>
        <a href="https://facebook.com/loia5tqd001" title="Facebook">
          <ion-icon name="logo-facebook" />
        </a>
        <a href="https://github.com/loia5tqd001" title="Github">
          <ion-icon name="logo-github" />
        </a>
      </IconsWrapper>
      <Copyright>&copy; 2020 by Phonee Team.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
