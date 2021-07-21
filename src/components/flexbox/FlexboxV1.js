import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';

export default props => {
  return (
    <View style={style.FlexV1}>
      <Square color="#FF801A" />
      <Square color="#50D1F6" />
      <Square color="#DD22C1" />
      <Square color="#8312ED" />
      <Square color="#36C9A7" />
    </View>
  );
};

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: '#000'
    }
})