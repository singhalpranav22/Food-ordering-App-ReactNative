import React from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';

const ModalItem = ({title,price}) => {
    return (
        <>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 10,
            }}>{title}</Text>
            <Text style={{
                fontSize: 18,
                marginRight: 10,
            }} >{price}</Text>
        </View>
        <Divider width={1}></Divider>
        </>
    )
}

export default ModalItem;