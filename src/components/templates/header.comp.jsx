import React from 'react';

import routes from '../../utils/routes';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <header>
      <NavLink to={routes.product.path}>Go to Product Page</NavLink> <br/>
      <NavLink to={routes.cart.path}>Go to Cart Page</NavLink> <br />
      --- <br />
    </header>
  );
}

export default Header;
