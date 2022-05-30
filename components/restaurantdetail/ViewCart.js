import React, {useState} from 'react';
import {View, Text,Image,TouchableOpacity, Modal} from 'react-native';
import ModalItem from './ModalItem';
const ViewCart = ({currentCartState}) => {
    const [modalVisible, setModalVisible] = useState(false);
    let amount = 0;
    currentCartState.selectedItems.items.forEach(item => {
        amount += item.amount;
    });
   
    const checkOutModalContext = () =>{

        return(

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
            }}>
                <Text style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                }}>
                    {currentCartState.selectedItems.restaurantName}
                </Text>
            {
                currentCartState.selectedItems.items.map((item,index) => {
                    return(
                        <ModalItem key={item.title} title={item.title} price={item.price} />
                    )
                } )
            }
            <View
            style={{
                backgroundColor: 'black',
                padding: 10,
                borderRadius: 30,
                width: 150,
                alignItems: "center"
            }}
            >
            <TouchableOpacity
            onPress={() => setModalVisible(false)}>
                <Text style={{color: 'white'}}>Checkout $ {amount}</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
    return (
        <>
       <Modal
       animationType='slide'
       visible={modalVisible}
    //    transparent={true}
    style={{
        overflow: "hidden",
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "transparent"
    }}
       onRequestClose={() => {
           setModalVisible(false);
       }}
       >
         {checkOutModalContext()}
        </Modal>
      
        {currentCartState.selectedItems.items.length>0?
        <View style={{
            flex:1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 20,
            left:40,
            zIndex: 999,

        }}>
        <View style={{
            flexDirection:'row',
            justifyContent: 'center',
            widht: '100%',
        }}>
            <TouchableOpacity style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 10,
                borderRadius: 30,
                width:300,
                postion: "relative",
            }}
            onPress={() => setModalVisible(true)}
            >
                <Text style={{
                    color:"white",
                    fontSize:20
                }}>{"View Cart $ "+amount}</Text>
            </TouchableOpacity>
        </View>
        </View> : null}

        </>
    )
}

export default ViewCart;