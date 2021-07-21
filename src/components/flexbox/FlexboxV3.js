import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';

export default props => {
  return (
    <View style={style.FlexV3}>
      <Square color="#FF801A" side={20} />
      <Square color="#50D1F6" side={30} />
      <Square color="#DD22C1" side={40} />
      <Square color="#8312ED" side={50} />
      <Square color="#36C9A7" side={60} />
    </View>
  );
};

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
        alignItems: "baseline",
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})