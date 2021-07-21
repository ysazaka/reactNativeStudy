import React from 'react';
import { Text } from 'react-native'

import componentStyle from './componentStyle';

/*
* There are multiple ways of exporting a function
*/

// First way
export default function sinceItsTheDefaultFunctionTheNameDoesntMatter() {
    return <Text>Main function, but not exported</Text>
}

function Side1() {
    return <Text>Side function nº1</Text>
}

// Second way
export function Side2() {
    return <Text style={componentStyle.bigText}>Side function nº2</Text>
}

// Third way
export { side1, side2 }