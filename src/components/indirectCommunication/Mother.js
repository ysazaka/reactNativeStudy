import React, {useState} from 'react';

import Daughter from './Daughter';

import componentStyle from './componentStyle';

/*
 * The "Daughter" class has indirect access to the "Mother" class
 * That's a representation of the indirect communication,
 * so it can call the "showValue" function
 */

export default props => {
  const [num, setNum] = useState(0);

  function showValue(number) {
    setNum(number);
  }

  return (
    <>
      <Text style={componentStyle.bigText}>{num}</Text>
      <Daughter min={7} max={100} funcao={showValue} />
    </>
  );
};
