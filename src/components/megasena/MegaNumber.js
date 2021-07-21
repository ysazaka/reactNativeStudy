import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import componentStyle from './componentStyle'

export default ({number}) => {
    return (
        <View style={style.Container}>
            <Text style={[componentStyle.bigText, style.Number]}>
                {number}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000'
    },
    Number: {
        color: '#FFF'
    }
})