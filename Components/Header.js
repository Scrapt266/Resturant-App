import * as React from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header( ){

    const navigation = useNavigation();
    return(
        <View style = {styles.Header}>
        <View style = {styles.Logoaling}><Image source={require('../assets/rouge_logo.png')} style ={styles.Rougelogo}/></View>
        <View style = {styles.nav}>
             <TouchableOpacity onPress= {()=> navigation.navigate('Profile')}> 
                <View style={styles.Pfpic}>
                    <Image style={styles.pfpimg}source={{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}/>
                </View>
            </TouchableOpacity>   
            <TouchableOpacity onPress= {()=> navigation.navigate('Profile')}>
                <Text style = {styles.username}>username</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

/*css style sheet*/
const styles = StyleSheet.create({
    Header:{
        backgroundColor: '#161515ff',
    },
    Logoaling:{
        marginTop:30,
        alignItems:'center',

    },
    Rougelogo:{
        height: 190,
        width: 190,
    },

    h1:{
        padding: 40,
        color: 'white',
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center'
    },

    nav:{
        textAlign:'center',
        borderWidth: 2,
        borderRadius:10,
        borderColor: '#ffffff72', 
        padding: 5,
        marginBottom:10,
    },
     Pfpic:{
  
        marginTop:10,
        borderWidth: 2,
        borderColor:'#ffffff72',   
        borderRadius:100,
        width: 50,
        height: 50,
    },
    username:{
        color: 'white',
    },
    pfpimg:{
       flex:1,
    borderRadius:100,
    }
})

