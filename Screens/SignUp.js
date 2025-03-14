import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Colors from '../constants/Colors';
const SignUp = () => {
    const [text, setText] = useState('');
    return(
        <View style={{flex:1, backgroundColor: Colors.primary}}>
        <View style={{alignItems: "center", justifyContent: "center", transform:[{translateX:'0%'},{translateY:'30%'}]}}>
            <View style={{backgroundColor:Colors.yellow}}>
                
            </View>
            <Text style={{fontWeight: 400, fontSize: 30}}>Make an account!</Text>
            <Text>First Name</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='First Name'
            onChangeText={First => setText(First)}
            defaultValue={text}
            />
            <Text>Last Name</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='Last Name'
            onChangeText={Last => setText(Last)}
            defaultValue={text}
            />
            <Text>Username</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='Username'
            onChangeText={Username => setText(Username)}
            defaultValue={text}
            />
            <Text>Email Address</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='Email'
            onChangeText={Email => setText(Email)}
            defaultValue={text}
            />
            <Text>Password</Text>
            <TextInput style={{height: 40, padding: 5}}
            placeholder='Password'
            onChangeText={Password => setText(Password)}
            defaultValue={text}
            />
            <Text style={{color:Colors.secondary}}>Click this box to remember sign in details</Text>

            <Text style={{backgroundColor:Colors.fgreen, fontSize: 34, fontWeight:500, transform:[{translateX:0},{translateY: '50%'}]}}>Continue</Text>
            </View>
            <View style={{}}>

            </View>
           
        </View>
    )
}
export default SignUp;
