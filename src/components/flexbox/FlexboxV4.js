import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0}/>
      <View style={style.V1}/>
      <View style={style.V2}/>
    </View>
  );
};

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
      flexGrow: 1,
      height: 300,
      backgroundColor: '#DD22C1'
    },
    V1: {
      flexGrow: 1,
      backgroundColor: '#FF801A'
    },
    V2: {
      flexGrow: 1,
      backgroundColor: '#50D1F6'
    }
})