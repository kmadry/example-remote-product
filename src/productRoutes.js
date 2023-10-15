import React, { lazy } from 'react';

const Products = lazy(() => import('./components/products'));
const Categories = lazy(() => import('./components/categories'));

const routes = [
  {
    path: '/products',
    element: <Products />,
    children: [
      {
        path: ':categoryId',
        element: <Categories />,
      }
    ]
  },
];

export default routes;