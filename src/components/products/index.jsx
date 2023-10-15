import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/products/category-1">p1</Link>
        </li>
        <li>
          <Link to="/products/category-2">p2</Link>
        </li>
      </ul>
      Products - remote3
      <Outlet />
    </div>
  );
}

export default Products;
