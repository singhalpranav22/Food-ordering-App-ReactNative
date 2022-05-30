import {React,useState} from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";



const HeaderButtons = (props) => {
  
    const handlePress = (e) => {
        if(props.setSelected!==undefined){
            props.setSelected(props.text); 
        }
        }
            
    return (
        <View>
        <TouchableOpacity
        style={{
            backgroundColor: props.selected===props.text?"black":"white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={(event) => handlePress(event)}
        >
           <Text
           style={{
               color: props.selected===props.text?"white":"black",
           }}
           >{props.text}</Text>
           </TouchableOpacity>
        </View>
      
    )
 }

export default function HeaderTabs(props){
   
    return (
        <View style={{
            flexDirection: "row",
            alignSelf: "center",
        }}>
            <HeaderButtons text="Delivery" btnColor="black" textColor="white" selected={props.selected} setSelected={props.setSelected}/>
            <HeaderButtons text="Pickup" btnColor="white" textColor="black" selected={props.selected} setSelected={props.setSelected}/>
        </View>
    )
}
