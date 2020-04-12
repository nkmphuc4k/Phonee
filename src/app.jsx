import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './utils/routes';

import Header from './components/templates/header.comp';
import Footer from './components/templates/footer.comp';
import NotFoundPage from './components/pages/404-page.comp';
import ProductPage from './components/pages/product.comp';
import CartPage from './components/pages/cart.comp';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={routes.product.path} component={ProductPage} exact />
        <Route path={routes.cart.path} component={CartPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
