import React from 'react';
import {Text} from 'react-native';

/*
 * Here we have an example of how to pass parameters within the XML (look on App.js)
 */

export default props => {
  return (
    <>
      <Text>Membros da família:</Text>
      {props.children}
    </>
  );
};
