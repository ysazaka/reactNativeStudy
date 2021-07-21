import React from 'react';
import {FlatList, Text} from 'react-native';
import componentStyle from '../componentStyle';

import products from './products';

export default props => {
    const renderedProduct = ({item: product}) => {
        return <Text>{product.id} - {product.name}: $ {product.price}</Text>
    }

  return (
    <>
      <Text style={componentStyle.bigText}>Product List V2</Text>
      <FlatList
        data={products}
        keyExtractor={item => `${item.id}`}
        renderItem={renderedProduct}
      />
    </>
  );
};
