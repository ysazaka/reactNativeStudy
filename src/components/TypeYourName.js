import React, {useState} from 'react'
import {Text, TextInput} from 'react-native'

/*
* An uncontrolled component, is when the app doesn't control what the user is doing
* but, at the moment that you manipulate the values, it turns into a controlled component
* State > Interface
*/

export default props => {
    const [name, setName] = useState('Test')

    return (
        <View>
            <Text>{name}</Text>
            <TextInput 
                value={name}
                placeholder="Type your name" 
                onChangeText={name => setName(name)}
            />
        </View>
    )
}