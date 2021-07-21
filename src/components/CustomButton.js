import React from 'react';
import {Button} from 'react-native';

/*
 * If the function called on the "onPress" is called with (), the function is called
 * before the button is pressed
 * "execute" is the reference of the function
 * "execute()" is when the function is executed
 */

export default props => {
  function execute() {
    console.warn('Test #01');
  }

  return (
    <>
      <Button title="Execute #01" onPress={execute} />
      <Button
        title="Execute #02"
        onPress={function () {
          console.warn('Test #02');
        }}
      />
      <Button title="Execute #03" onPress={() => console.warn('Test #03')} />
    </>
  );
};
