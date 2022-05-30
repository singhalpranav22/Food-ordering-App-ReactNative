import {React,useState} from "react";
import { View, Text,Image, ScrollView } from "react-native";


const CategoryItem = (props) =>{
    return (
        <View style={{
            alignItems: "center",
            marginRight: 30
        }}>
        <Image source={props.imageUrl}
        style={{
            height:50,
            width:40,
            resizeMode:'contain'
        }}
        />
        <Text style={{
               fontSize:13,
               fontWeight: 'bold',
        }}>{props.text}</Text>
     </View>
    );
}


const Categories = () =>{
    const items=[
        {
            image: require('../../assets/images/shopping-bag.png'),
            text: "Pick-Up"
        },
        {
            image: require('../../assets/images/soft-drink.png'),
            text: "Soft Drinks"
        },
        {
            image: require('../../assets/images/bread.png'),
            text: "Bakery Items"
        },
        {
            image: require('../../assets/images/fast-food.png'),
            text: "Fast Foods"
        },
        {
            image: require('../../assets/images/deals.png'),
            text: "Deals"
        },
    ]
return (
<View style={{
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,
    borderRadius: 10,
}}>
 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
 {items.map((item,index)=>{
        return <CategoryItem key={item.text} imageUrl={item.image} text={item.text}/>
 })}
 </ScrollView>
 </View>
);
}

export default Categories;