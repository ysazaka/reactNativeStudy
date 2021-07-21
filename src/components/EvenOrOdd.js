import React from 'react';
import {Text} from 'react-native';
import componentStyle from './componentStyle';

/*
 * Example of conditional renderization
 */

export default ({number = 0}) => {
  // First way
  //   let isEven = true;

  //   if (number % 2 === 0) {
  //     isEven = true;
  //   } else {
  //     isEven = false;
  //   }

  //   if (isEven) {
  //     showResult(Par);
  //   } else {
  //     showResult(Ímpar);
  //   }

  //   function showResult(result) {
  //     return (
  //       <View>
  //         <Text>O resultado é:</Text>
  //         <Text style={componentStyle.bigText}>{result}</Text>
  //       </View>
  //     );
  //   }

  // Second way
  return (
    <View>
      <Text>O resultado é:</Text>
      {number % 2 === 0 ? (
        <Text style={componentStyle.bigText}>Par</Text>
      ) : (
        <Text style={componentStyle.bigText}>Ímpar</Text>
      )}
    </View>
  );

  // Third way
  /* If the "false" is reached, nothing is going to be renderized */
  //   return (
  //     <View>
  //       <Text>O resultado é:</Text>
  //       {number % 2 === 0 ? (
  //         <Text style={componentStyle.bigText}>Par</Text>
  //       ) : (
  //         false
  //       )}
  //     </View>
  //   );
};
