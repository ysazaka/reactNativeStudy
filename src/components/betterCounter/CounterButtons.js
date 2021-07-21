import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={style.Buttons}>
      <Button title="-" onPress={props.increase} />
      <Button title="+" onPress={props.decrease} />
    </View>
  );
};

const style = StyleSheet.create({
  Buttons: {
    flexDirection: 'row',
  },
});
