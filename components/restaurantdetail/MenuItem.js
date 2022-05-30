import {React,useState,useEffect} from "react";
import {View, Text,Image,TouchableOpacity} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

const MenuItem = ({dispatch,actionDispatchers,item,restaurantName,currentCartState}) => {
    let checked=false;
    if(currentCartState.selectedItems.items.find(food => food.id === item.id) && currentCartState.selectedItems.restaurantName === restaurantName){
       checked=true;
    }
    return (
        <>
        <View style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            flexDirection: "row",
            padding: 10,
            margin:5,
        }}>
        <BouncyCheckbox 
        isChecked={checked}
        iconStyle={{
            borderColor : "lightgray",
            borderRadius: 0
        }}
        
        onPress={(isChecked) => {
            if(isChecked){
                checked=false;
                dispatch(actionDispatchers.addToCart(item,restaurantName));
            }
            else{
                checked=true;
                dispatch(actionDispatchers.removeFromCart(item,restaurantName));
            }
        }}
        fillColor="green"
        />
        <View style={{
            flex:1.5,
            padding : 8,
        }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
            }}>
                {item.title}
            </Text>
            <Text style={{
                fontSize: 15,
                fontWeight: '400',
            }}>
                {item.description}
            </Text>
            <Text style={{
                fontSize: 17,
                fontWeight: 'bold',
            }}>
                {item.price}
            </Text>
        </View>
        <View style={{
            flex:1,
            padding: 8,
            alignItems: 'center',
        }}>
            <Image
                source={{
                    uri:  item.image,
                }}
                style={{
                    height: 100,
                    width: '100%',
                    borderRadius:10,
                }}
            />
        </View>
    </View>
    </>
    )
}

export default MenuItem;