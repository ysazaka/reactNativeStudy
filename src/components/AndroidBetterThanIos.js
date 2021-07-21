import React from 'react';
import {Text, Platform} from 'react-native';
import componentStyle from './componentStyle';

export default props => {
  if (Platform.OS === 'android') {
    return <Text style={componentStyle.bigText}>Android '&gt;' iOS</Text>;
  } else if (Platform.OS === 'ios') {
    return (
      <Text style={componentStyle.bigText}>
        Of course that Android '&gt;' iOS
      </Text>
    );
  } else {
    <Text style={componentStyle.bigText}>
      Just seeing this useless fight, because Android has always been better
      than iOS
    </Text>;
  }
};
