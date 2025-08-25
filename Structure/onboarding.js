import * as React from 'react';
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage'
import {View, Text, StyleSheet, Button, TextInput, Image, Alert,TouchableOpacity } from 'react-native';
import { useState , useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';


export default function Onboarding({navigation}){
    
    useFocusEffect(
    useCallback(() => {
        validatelogin();
    }, [])
    );


    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const [errors, setErrors] = useState({})

    const validation =() =>{
        let errors = {}

        if (!username) errors.username ="Username is required"
        if (!password) errors.password ="password is required"

        setErrors(errors)
        return Object.keys(errors).length === 0;        
    };



    
    const managelogin = async () => {
        if(validation()){
            
          let  login ={
               Name:  username, 
               Password: password
            };

            await AsyncStorage.setItem('LoginData', JSON.stringify(login))
        Alert.alert(
            'Login Sucsesful',
            'Your Account Was Sucessfuly Made',
            [{text:"OK", onPress:()=> navigation.replace('Home') }]

        )
        }
    }

    const validatelogin = async () =>{
        
       const value = await AsyncStorage.getItem('LoginData');
            if(value !== null){ navigation.replace('Home');}
    }

    return(
    <View style ={styles.Onboarding}> 
    <View style = {styles.Logoaling}><Image  source={require('../assets/Roseredesign.png')} style ={styles.Rougelogo}
   
    />  <Text style={styles.welcome}>Welcome</Text> </View>
    <View style ={styles.Form} >
         <Text style={styles.Label}>Username</Text>
         <TextInput style={styles.input} placeholder='Enter Username' value={username} onChangeText={ setUsername}/>
            {
                errors.username ?<Text style ={styles.errormessage}>{errors.username}</Text>: null
            }
         <Text style={styles.Label} >password</Text>
         <TextInput style={styles.input} placeholder='Enter password' value={password} onChangeText={setpassword}secureTextEntry/>    
            {
                errors.password ?<Text style ={styles.errormessage}>{errors.password}</Text>: null
            }
         <View style= {{alignItems:'center'}}>
         <TouchableOpacity style={styles.Button} onPress={managelogin} >
                        <Text>Login</Text>   </TouchableOpacity> 
              </View>                
       
    </View>
       
    </View>
   
    );
}

/*css style sheet*/
const styles = StyleSheet.create({
    Onboarding:{
        backgroundColor:'#C21E56',
        flex:1,
        justifyContent:'center'
    },
        Button:{
        alignItems:'center',
        borderWidth: 4,
        borderColor:'#C21E56',
        backgroundColor:'#bc4a70ff',
        color:'white',
        marginTop:30,
        padding:10,
        borderRadius:50,
        width:200,
    },

    Form:{
        paddingTop:40,
        paddingHorizontal:30,
        flex:0.7,
        backgroundColor: '#161515ff',
        margin:10,
        borderRadius: 20,
    },

    Label:{
        fontWeight:'bold',
        color:'white',
        fontSize:18,
    },
    input:{
    margin:10,
    backgroundColor:"white",
    borderColor:'#C21E56',
    borderWidth: 3,
    borderRadius: 10,
    
    },

    errormessage:{
        color: "red",
        marginBottom: 10,
    },

    Rougelogo:{
        height: 110,
        width: 200,
        paddingTop:30,
    },
    Logoaling:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingHorizontal:10,
        backgroundColor: '#161515ff',
        margin:10,
        borderRadius: 20,
    },
       welcome:{
        fontSize:30,
        color:'#972228ff',
        fontFamily:'serif',
    }



});