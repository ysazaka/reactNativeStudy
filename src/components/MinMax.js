import React from 'react';
import {Text} from 'react-native';

import componentStyle from './componentStyle';

/*
* Example of how to pass parameters to a component
* the default name used is "props"
*/

export default (props) => {
  return (
    <Text style={componentStyle.bigText}>
      O valor {props.max} é maior que o valor {props.min}
    </Text>
  );
};
