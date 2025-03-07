import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
const Login = () => {
    const [text, setText] = useState('');
    return(
        <View>
            <Text>Login</Text>
            <Text>Email Address</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='Email'
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
            <Text>Password</Text>
            <Text>Click this box to remember sign in details</Text>
        </View>
    )
}
export default Login;