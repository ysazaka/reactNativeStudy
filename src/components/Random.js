import React from 'react';
import {Text} from 'react-native';

import componentStyle from './componentStyle';

/*
* There are other ways to pass parameters
* If specified the names of the parameters, it's not needed the props.name
* This is called "Destructuring"
*/

// export default ({min, max}) => {
export default props => {
  const {min, max} = props;
  const delta = max - min + 1;
  const random = Math.random() * delta + min;

//   const random = Math.random() * delta + props.min;

  return (
    <Text style={componentStyle.bigText}>O valor aleatório é {random}</Text>
  );
};
