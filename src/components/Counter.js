import React, {useState} from 'react';
import {Text, Button} from 'react-native';

import componentStyle from './componentStyle';

/*
* To update the data within the screen, we use the useState method
*/

export default ({initialValue = 0}) => {
  // let number = props.initialValue
  const [number, setNumber] = useState(initialValue);

  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 1);

  return (
    <>
      <Text style={componentStyle.bigText}>{number}</Text>
      <Button title="+" onPress={increase} />
      <Button title="-" onPress={decrease} />
    </>
  );
};
