import * as React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Button, Alert } from 'react-native';


const menueitemslist =[ 
    {id:'1', name: 'Red Steak', Displayimage: {uri: "https://i.pinimg.com/736x/fe/dc/cb/fedccbf118a54c4c929121bd31519dba.jpg"}, typeof:'Non-vegetarian', price:'$70'}, 
    {id:'2', name: 'Jordan Wine', Displayimage:{uri: "https://i.pinimg.com/736x/48/f0/4f/48f04f29ec40d8cc6cc68a22f1fce092.jpg"}, typeof:'Drinks', price:'$50'}, 
    {id:'3', name: 'Pasta Bolognese', Displayimage:{uri: "https://i.pinimg.com/736x/42/a7/bf/42a7bf29a12dd81bfd878b93de9f1a1a.jpg"}, typeof:'Non-vegetarian', price:'$60'}, 
    {id:'4', name: 'Lemon-Butter LobsterTail', Displayimage:{uri: "https://i.pinimg.com/736x/17/68/4d/17684dc757709f09eb66c30c2ca6539c.jpg"}, typeof:'Non-vegetarian', price:'$80'}, 
    {id:'5', name: 'Spaghetti & Meatballs', Displayimage:{uri: "https://i.pinimg.com/1200x/48/55/3c/48553c9630677e366e437b02b46de7bb.jpg"}, typeof:'Non-vegetarian', price:'$70'}, 
    {id:'6', name: 'Sesame Chicken', Displayimage:{uri: "https://i.pinimg.com/736x/6c/e9/96/6ce996b43d3872c185a8f420984c4faa.jpg"}, typeof:'Non-vegetarian', price:'$60'}, 
    {id:'7', name: 'Classic Dry Martini', Displayimage:{uri: "https://i.pinimg.com/1200x/3e/6b/42/3e6b42fad8bea64a46fa90f14aa428b6.jpg"}, typeof:'Drinks', price:'$50'}, 
    {id:'8', name: 'Asparagus Risotto', Displayimage:{uri: "https://hurrythefoodup.com/wp-content/uploads/2016/04/asparagus-risotto-16.jpg"}, typeof:'vegetarian', price:'$30'}, 
    {id:'9', name: 'Mushroom Polenta', Displayimage:{uri: "https://hurrythefoodup.com/wp-content/uploads/2022/07/creamy-polenta-with-mushrooms-served.jpg"}, typeof:'vegetarian', price:'$50'}, 
    {id:'10',name: 'Vegan Tofu Bolognese', Displayimage:{uri: "https://hurrythefoodup.com/wp-content/uploads/2016/08/Vegan-Tofu-Bolognese.jpg"}, typeof:'vegetarian', price:'$60'}, 
    {id:'11',name: 'Stella Rosa Green Apple', Displayimage:{uri: "https://i.pinimg.com/736x/51/ee/d5/51eed583c732a67896f8d926b922d6d3.jpg"}, typeof:'Drinks', price:'$30'}, 
    {id:'12',name: 'Tuscan White Bean Soup', Displayimage:{uri: "https://hurrythefoodup.com/wp-content/uploads/2021/09/white-bean-soup-2.jpg"}, typeof:'vegetarian', price:'$50'}, 
    {id:'13',name: 'Tequila Sunrise', Displayimage:{uri: "https://i.pinimg.com/1200x/d2/7d/a3/d27da3cb7645f93ddbd789fadd7f99df.jpg"}, typeof:'Drinks', price:'$30'}, 
    {id:'14',name: 'Vegan Lentil Bolognese', Displayimage:{uri: "https://hurrythefoodup.com/wp-content/uploads/2021/12/vegan-lentil-bolognese-ready-to-eat.jpg"}, typeof:'vegetarian', price:'$40'}, 
    {id:'15',name: 'Hearty Beef Lasagna', Displayimage:{uri: "https://i.pinimg.com/736x/19/5e/9b/195e9b4d83a48b423f1c1a3d8f0f4b59.jpg"}, typeof:'Non-vegetarian', price:'$60'}, 
    {id:'16',name: 'Cookies & Cream', Displayimage:{uri: "https://i.pinimg.com/1200x/d3/37/eb/d337eb62dc68e792a29e53e79fe590e5.jpg"}, typeof:'Desert', price:'$15'}, 
    {id:'17',name: 'Tiramisu', Displayimage:{uri: "https://i.pinimg.com/1200x/24/1f/40/241f40cdb81ee38b3d1e87a593c5ace7.jpg"}, typeof:'Desert', price:'$20'}, 
    {id:'18',name: 'Mini Lemon Cheesecake', Displayimage:{uri: "https://i.pinimg.com/736x/01/82/0f/01820fd6536134be57796233d2806805.jpg"}, typeof:'Desert', price:'$12'}, 
    {id:'19',name: 'Cheesecake', Displayimage:{uri: "https://i.pinimg.com/736x/77/fc/ef/77fceff38c5b6f3d271ddca20efbe277.jpg"}, typeof:'Desert', price:'$30'}, 
    {id:'20',name: 'MenueItem20', Displayimage:{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}, typeof:'Non-vegetarian', price:'$0'}, 
];

  const purchase = () => {
        Alert.alert(
                   "Item added",
            ' Item will Be Added To Bill'
        )
    };

const Item = ({name, Displayimage, price }) => 
{ return( 
    <View > 
        <View style = {styles.menuescroll} >
            <View style = {styles.fooddetail}>
                <Image style = {styles.MenueItemimg} source={Displayimage}/> 
                <Text style = {styles.itemname}>{name}</Text> 
                </View>
                <Text style = {styles.prices}>{price}</Text>
                <Button title='Order' onPress={purchase}/>
    </View>
    </View> 
    ) 
}

const MenueItems = () => {
const renderItem = ({item}) => <Item name={item.name} Displayimage={item.Displayimage} price={item.price}/>
return (
    <View >
        <FlatList data={menueitemslist} renderItem={renderItem}/>
    </View>
    )

    }

export default MenueItems;

/*css style sheet*/
const styles = StyleSheet.create({
   
    menuelsit:{
        flex:1,
    },

    fooddetail:{
      
        textAlign:'center',
        color:"red"
    },

    prices:{
        textAlign:"center",
        fontSize: 15,
        color:"#d9b6b6c1"
    },

    menuescroll:{
        borderRadius: 20,
        borderWidth: 2,
        margin: 10,
        paddingHorizontal:10,
        paddingVertical:10,
        color:'white',
        borderColor: 'white', 
        backgroundColor: '#161515c1',
    },

    p:{
        color: 'white',
        textAlign: 'center',
        justifyContent:'center',
    },

    MenueItemimg:{ 
        height: 170, 
        width: 200, 
        borderRadius: 20,
    },

    itemname:{
        fontFamily:'serif',
        marginTop:30,
        marginLeft:20,
        fontSize:25,
        color:'#eb8282c1',
        textAlign:'center',
    }

})

