import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './utils/routes';

import Header from './components/templates/header.comp';
import Footer from './components/templates/footer.comp';
import ScrollToTop from './components/templates/scroll-to-top.comp';

import NotFoundPage from './components/pages/404-page.comp';
import ProductPage from './components/pages/product.comp';
import ProductDetailPage from './components/pages/product-detail.comp';
import CartPage from './components/pages/cart.comp';

export default function App() {
  return (
    // We need the basename to serve on github page correctly: https://github.com/facebook/create-react-app/issues/1765#issuecomment-285114194
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path={routes.home.path} render={() => <Redirect to={routes.product.path} />} exact />
        <Route path={routes.product.path} component={ProductPage} exact />
        <Route path={`${routes.product.path}/:productId`} component={ProductDetailPage} exact />
        <Route path={routes.cart.path} component={CartPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
