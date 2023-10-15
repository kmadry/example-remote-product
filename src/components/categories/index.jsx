import React from 'react';
import { useParams } from 'react-router-dom';

const Categories = () => {
  let {categoryId} = useParams();
  return (
    <div>
      Categories {categoryId}
    </div>
  );
}

export default Categories;
