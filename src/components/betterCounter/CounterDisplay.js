import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import componentStyle from './componentStyle';

export default props => {
  return (
    <View style={style.Display}>
      <Text style={[componentStyle.bigText, style.DisplayText]}>
        {props.number}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
  },
  DisplayText: {
    color: '#FFF',
  },
});
