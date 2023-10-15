import React, {lazy} from 'react';

const Products = lazy(() => import('./components/products'));

const routes = [
  {
    path: '/productsss',
    element: <Products />
  },
];

export default routes;