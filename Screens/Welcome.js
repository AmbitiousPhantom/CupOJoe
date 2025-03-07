import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import Colors from '../constants/Colors';
// import Button from '../components/Button'; <Button title="SignUp"onPress={()=>navigation.navigate("SignUp")}/>
const Welcome = () => {
    return(
    <View style={[styles.container]}>
        
        
           <View style= {{alignItems: "center", justifyContent: "center"}}>
           <Text style={{fontSize:30, color: Colors.secondary,}}>Welcome to Cafe Chills!</Text>
           <Image 
           source={require('../assets/Logo.png')}
           style={{width: '60%', height: '60%',}}/>
           </View>

        <View style={{alignItems: "center", justifyContent: "center", }}>
            
                <Text style={{fontSize: 50, fontWeight: 600,}}>Sign in </Text>
            
            <View style={[styles.box]}>
                <Text style={{fontSize: 25, }}>Sign Up</Text>
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
        backgroundColor: Colors.dgreen,
        alignItems: 'center',
        height: '70%',
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