import { React, useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "@rneui/themed";


const YELP_API_KEY = "UsU53Aa-NMyjuwQaXD7RV6i4fXpDKljAbJs-nxzwX0C4wgxHty0n9EGZlSlBE6K1U3lIQEKbdCIgmqmsPV-n3XQ-_zeFHVsIzdS8-l5sHTleNvDbw6jBuyKKla-QYnYx";

export default function Home({navigation}) {
    const RestaurantsList = [
        {
            image_url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "SkyHouse: Rdc, Ghaziabad",
            rating: 4.6,
        },
        {
            image_url: "https://picsum.photos/seed/picsum/200/300",
            name: "Cinch, RDC, Ghaziabad",
            rating: 4.4,
        },
        {
            image_url: "https://picsum.photos/seed/picsum/200/300",
            name: "Anna, Rajnagar, Ghaziabad",
            rating: 4.1
        },
        {
            image_url: "https://picsum.photos/seed/picsum/200/300",
            name: "Krishna Sagar, Rajnagar, Ghaziabad",
            rating: 4.8
        }
    ]
    const [restaurantsData, setRestaurantsData] = useState(RestaurantsList);
    const [city, setCity] = useState('NewYork');
    const [selected, setSelected] = useState("Delivery");
    const getRestaurantsFromYelp = () => {
        setRestaurantsData([]);
        fetch(`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                // console.log(responseJson);
                if (responseJson.businesses) {
                    setRestaurantsData(responseJson.businesses.filter(business => {
                        return business.transactions.includes(selected.toLowerCase())}));
                }
                else {
                    setRestaurantsData([]);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city,selected]);
    
    return (
        <SafeAreaView style={{
            backgroundColor: "#eee",
            flex: 1,
        }}>
            <View style={{ height: 0 }}></View>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs selected={selected} setSelected={setSelected}>
                </HeaderTabs>
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
            >
                <Categories />
                <RestaurantItems restaurantsData={restaurantsData} navigation={navigation} />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs>
            </BottomTabs>
        </SafeAreaView>
    )
}