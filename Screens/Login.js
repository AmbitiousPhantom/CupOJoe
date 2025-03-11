import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native'; 
import Colors from '../constants/Colors';
const Login = () => {
    const [text, setText] = useState('');
    return(
        <View style={{flex:1, backgroundColor: Colors.primary}}>
        <View style={{alignItems: "center", justifyContent: "center", transform:[{translateX:'0%'},{translateY:'30%'}]}}>
            <Text style={{fontWeight: 400, fontSize: 30}}>Login</Text>
            <Text>Email Address</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='Email'
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
            <Text>Password</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='Password'
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
            <Text style={{color:Colors.secondary}}>Click this box to remember sign in details</Text>
            </View>
        </View>
    )
}
export default Login;
