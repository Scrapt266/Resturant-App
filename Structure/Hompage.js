import * as React from 'react';
import {View , StyleSheet } from 'react-native';


import Header from '../Components/Header';
import Hero from '../Components/Herosection';
import Menue from '../Components/menue';
import Menuelist from '../Components/menuelist';


export default function Homepage(){
    return(
    <View style ={styles.Homepage}> 
        <Header/> 
        <View> <Hero/> </View>
        <View> <Menue/> </View>
        <View> <Menuelist/> </View>
    </View>
    );
}

/*css style sheet*/
const styles = StyleSheet.create({
    Homepage:{
        flex: 1,
        backgroundColor: '#C21E56',

    },
})

