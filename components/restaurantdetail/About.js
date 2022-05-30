import {React} from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';


const About = (props) => {
    return (
        <View style={{
            backgroundColor: '#fff',
            borderRadius: 10,
        }}>
            <RestaurantImage image={props.image}/>
            <RestaurantInfo title={props.title} description={props.description}/>
        </View>
    );
}

const RestaurantImage = (props) => {
    return(
        <Image
        source={{
            uri:  props.image,
        }}
        style={{
            height: 240,
            width: '100%',
        }}/> 

    )
}

const RestaurantInfo = (props) => {
    return (
        <View>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                padding:5,
            }}>
                {props.title}
            </Text>
            <Text style={{
                fontSize: 16,
                fontWeight: '400',
                padding:5,
            }}>
                {props.description}
            </Text>
        </View>
    );
}

export default About;