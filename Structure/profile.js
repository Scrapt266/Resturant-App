import * as React from 'react';
import {View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage'
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';


export default function Profile({navigation}){
   
const [Name, setusername] = useState("")   
    
  const displayname  = async () =>{
 
       const value = await AsyncStorage.getItem('LoginData');  
       const user = JSON.parse(value)
       setusername(user.Name);
    }
    
   useFocusEffect(
       useCallback(() => {
            displayname();
       }, [])
       );


const logout = ()=> {
       Alert.alert(
            "Logout",
            "You Will Loose Your Acount Info Perminently, Are You Sure?",
            [{ 
                text:"yes",
          
            onPress: async ()=>{ 
                await AsyncStorage.clear();
                 navigation.replace('Login');
            },
        },
        
        {
            text:'No'
        },
     ], 
      )}
    return( 
        <View style={styles. profile}>
    <View style ={styles.Homepage}> 
        <View style={styles.Pfp}>
            <Image style={styles.pfpimg}source={{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}/>
        </View>
           <Text style={styles.user}>Username: {Name}</Text>
        <View style={styles.logout}>
            <View >
            <TouchableOpacity style={styles.Button}onPress={logout} >
                <Text>Logout</Text>   </TouchableOpacity> 
            </View>    
        </View>
    </View>
    </View>
    );
}

/*css style sheet*/
const styles = StyleSheet.create({
    profile:{
        flex:1,
        backgroundColor:'#C21E56',
    },
   

    Homepage:{
        flex: 0.5,
        backgroundColor: '#161515ff',
        alignItems: 'center',
    },
    
    Pfp:{
        flex: 0.9,
        marginTop:90,
        borderWidth: 9,
        borderColor: '#C21E56',   
        borderRadius:100,
        width: 200,
        
    },
    user:{
        paddingTop:20,
        fontSize:19,
        color: 'white',

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
        width:100,
    },
    pfpimg:{
       flex:1,
    borderRadius:100,
    
    }


})
