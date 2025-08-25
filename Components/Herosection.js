import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Hero(){
    return(
        <View  style = {styles.Herosection}><ImageBackground  source={require('../assets/herobackground.jpg')} style ={styles.background}>
            <Text style = {styles.p}>Rosery Rouge, providing high class and high quality delicacies since 1995.</Text>
        </ImageBackground>
        </View>
    );
}

/*css style sheet*/
const styles = StyleSheet.create({
    Herosection:{
        borderWidth: 2,
        borderColor: '#ffffff72', 
        backgroundColor: '#38282dff',
        alignItems: 'center',
    },
    p:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        textShadowColor: 'black',
        fontWeight: 'bold',
        textShadowRadius: 2,
        textShadowOffset: { width: 1, height: 2},
    },

    background:{
        height:200,
        justifyContent:  'center',
        alignItems: 'center',
    }
})

