import React from 'react';
import {Text} from 'react-native';

import componentStyle from '../componentStyle';

export default props => {
  return (
    <>
      <Text style={componentStyle.bigText}>
        {props.name} {props.lastName}
      </Text>
    </>
  );
};
