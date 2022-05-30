import {React,useState} from "react";
import { View, Text,Image,TouchableOpacity} from "react-native";
import {FontAwesome5} from "react-native-vector-icons";

const BottomButton = (props) => {

    return (
        <TouchableOpacity>
        <View style={{
            alignContent:'center',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <FontAwesome5 name={props.icon} size={25} color="black" />
            <Text>
                {props.text}
            </Text>
        </View>
        </TouchableOpacity>
    );
}
const BottomTabs = (props) => {
    return (
        <View style={
            {
                flexDirection: "row",
                justifyContent: "space-between",
                width: '100%',
                paddingHorizontal: 20,
                paddingBottom:10,
                paddingTop: 10,
                borderRadiusTop: 20,
                alignItems: 'center'
            }
        }>
            <BottomButton icon="home" text="Home" />
            <BottomButton icon="search" text="Browse" />
            <BottomButton icon="shopping-bag" text="Grocery" />
            <BottomButton icon="receipt" text="Orders" />
            <BottomButton icon="user" text="Account" />

        </View>
    )
}



export default BottomTabs;