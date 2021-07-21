import React, {useState} from 'react';
import {Text} from 'react-native';
import componentStyle from '../componentStyle';

import CounterButtons from './CounterButtons';
import CounterDisplay from './CounterDisplay';

/*
 * This improved counter, shows that even having two child elements,
 * the communication between the display and the buttons pass through the parent element
 * So here we have an example of direct and indirect communication
 */

export default props => {
  const [number, setNumber] = useState(0);

  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 1);

  return (
    <>
      <Text style={componentStyle.bigText}>Conter V2</Text>
      <CounterDisplay number={number} />
      <CounterButtons increase={increase} decrease={decrease} />
    </>
  );
};
