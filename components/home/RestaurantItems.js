import {React,useState} from "react";
import { View, Text,Image,TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "react-native-vector-icons";


const RestaurantImage = (props) => {
    return(
        <>
        <Image
        source={{
            uri: props.image_url,
        }}
        style={{
            height: 150,
            width: '100%',
        }}
        >
        </Image>
        <TouchableOpacity style={{
            position: 'absolute',
            top: 10,
            right:20,
        }}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
      </>
    )
}

const RestaurantInfo = (props) => {
    return (
        <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
        }}>
        <View style={{
            marginLeft: 6,
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
            }}>
                {props.name}
            </Text>
            <Text>
                36 minutes away
            </Text>
        </View>
        <View style={{
            marginRight:6,
            backgroundColor: '#eee',
            borderRadius: 50,
        }}>
            <Text style={{
                padding:6
            }}>{props.rating}</Text>
        </View>
        </View>
    );
}
const RestaurantItems = ({navigation,...props}) => {
    return (
       props.restaurantsData.map((item,index) => {
           return (
            <TouchableOpacity activeOpacity={0.9} key={item.id}
            onPress={() => {
                navigation.navigate('RestaurantDetail',{
                    title: item.name,
                    image: item.image_url,
                    price: item.price,
                    reviews: item.review_count,
                    rating: item.rating,
                    categories: item.categories,
                });
            }}
            >
            <View style={{
                padding:10,
                marginTop:10,
                backgroundColor: '#fff',
                borderRadius: 10,
            }}>
                <RestaurantImage image_url={item.image_url}/>
                <RestaurantInfo name={item.name} rating={item.rating} />
            </View>
            </TouchableOpacity>
           )
       })
    );
}

export default RestaurantItems;