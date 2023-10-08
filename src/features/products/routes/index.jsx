import React from 'react';

import ProductEditPage from './ProductEditPage';
import ProductUploadPage from './ProductUploadPage';

const productsRoutes = [
  {
    path: 'product',
    children: [
      { path: 'upload', element: <ProductUploadPage /> },
      { path: 'edit/:id', element: <ProductEditPage /> },
    ],
  },
];

export default productsRoutes;
