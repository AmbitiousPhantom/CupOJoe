import React from 'react';
import {View, Text, StyleSheet, Image, Button,Pressable} from 'react-native';
import Colors from '../constants/Colors';
// import Button from '../components/Button'; <Button title="SignUp"onPress={()=>navigation.navigate("SignUp")}/>
const Welcome = ({navigation}) => {
    return(
   
<View style={[styles.container]}>    
           <View style= {{alignItems: "center", justifyContent: "center"}}>
           <View style={[styles.box]}>
           <Text style={{fontSize:30, color: Colors.secondary,transform:[{translateX: '0%'},{translateY:'100%'}],}}>Welcome to Cafe Chills!</Text>
            </View>
           <Image 
           source={require('../assets/Logo.png')}
           style={{width: '60%', height: '60%',}}/>
           </View>

        <View style={{alignItems: "center", justifyContent: "center", }}>
                <View style={{backgroundColor: Colors.fgreen, Width:'100%', Height:'100%'}}>
                    <Pressable onPress={()=>navigation.navigate("Login")}>
                    <Text style={{fontSize: 50, fontWeight: 600,}}>Login </Text>
                    </Pressable>
                </View>
                <View style={{backgroundColor: Colors.white}}>
                    <Pressable onPress={()=>navigation.navigate("SignUp")}>
                    <Text style={{fontSize: 25, fontWeight: 400,}}>Sign Up</Text>
                    </Pressable>
                </View>
                <View styles={{}}>
                    <Pressable onPress={() => navigation.navigate("GuestMenu")}>
                        <Text>Access without an account!</Text>
                    </Pressable>
                    
                </View>
       </View>
       <View style={[styles.boxtwo]}>
            <Button onPress={() => {console.log('Works');}} title="Questions? Ask Here!" color='#838a54'/>
        </View>
    </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: Colors.thirdary,},
    box:{
        flex: 1,
        backgroundColor: Colors.lblue,
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
    },
    boxtwo:{
        flex: 1,
        backgroundColor: Colors.lblue,

        alignContent: 'center',
        maxHeight: "50%",
        maxWidth: "100%",
    }

})

export default Welcome;
