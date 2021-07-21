import React from 'react';
import {Text} from 'react-native';
import componentStyle from '../componentStyle';

import products from './products';

export default props => {
  function getProductList() {
    return products.map(product => {
      return (
        <Text key={product.id}>
          {product.id} - {product.name} have the following price: $
          {product.price}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={componentStyle.bigText}>Product List</Text>
      {getProductList()}
    </>
  );
};
