import {React} from "react";
import {View, Text,Image,TouchableOpacity,ScrollView} from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantdetail/About.js";
import MenuItem from "../components/restaurantdetail/MenuItem.js";
import ViewCart from "../components/restaurantdetail/ViewCart.js";

import { useSelector,useDispatch } from "react-redux";
import actionDispatchers from "../redux/action_dispatchers/cart_actions.js";
const foods = [
    {
      id : 1,
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      amount: 13.5,
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        id : 2,
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      amount: 19.2,
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
        id : 3,
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      amount: 14.5,
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
        id : 4,
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      amount: 21.5,
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
        id : 5,
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      amount: 13.5,
      image:
        "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
  ];
  
  
// const apiJson = {
//     title: "Sky House Cafe,Rdc",
//     image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     price: "$$$",
//     reviews: 2451,
//     rating: 4.5,
//     categories: [{title: "Indian Food"} , {title: "Cafe"}],
// }

const RestaurantDetail = ({route,navigation}) => {
    
    const currentCartState = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const {title,image,price,reviews,rating,categories} = route.params;
    const formattedCategory = (categories).map((item, index) => {
    return item.title;
}).join(" - ");  
const description = `${title} - ${formattedCategory} - ${price? price : ""} - 💳 - (${rating}) ⭐️ (${reviews}+) `;
    return (
        <View style={{
            backgroundColor: '#eee',
        }}>
           <About title={title} description={description} image={image} route={route}/>
           <View style={{
               height:500,
           }}>
           <ScrollView>
           <Divider width={1}></Divider>
           {
               foods.map((item, index) => {
                     return (
                          <MenuItem key={item.id} item={item} restaurantName={title} dispatch={dispatch} actionDispatchers={actionDispatchers} currentCartState={currentCartState}/>
                     );
               })
           }
          </ScrollView>
          </View>
        <ViewCart navigation={navigation} restaurantName={route.params.title} currentCartState={currentCartState}/>
        </View>
    );
}

export default RestaurantDetail;