import React, {Fragment} from 'react';
import {Text} from 'react-native';

/*
* React Native don't allow to use two components (like Text) without a parent View
* It can be used multiple views for that end
* View - React.Fragment - Fragment - <>
*/

export default props => {
    return (
        <>
            <Text style={componentStyle.bigText}>{props.title}</Text>
            <Text>{props.subtitle}</Text>
        </>
    )
}
