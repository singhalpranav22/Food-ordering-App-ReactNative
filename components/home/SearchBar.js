import {React,useState,createRef} from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {Ionicons,AntDesign} from "react-native-vector-icons";

function SearchBar({setCity}) {
    var ref = createRef();
     return (
         <View style={{
             marginTop:15, flexDirection: "row",
         }}>
             <GooglePlacesAutocomplete
             ref={ref}
             placeholder="Search..."
             getAddressText={(data) => data.description}
             styles={
                 {
                     textInput:{
                         backgroundColor: "#eee",
                         borderRadius:20,
                         fontWeight: '700',
                         marginTop: 7
                     },
                     textInputContainer:{
                        backgroundColor:"#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 5,
                     }
                 }

             }
             renderLeftButton={() => {
                return (
                    <View style={{marginLeft: 10}}>
                        <Ionicons name="location-sharp" size={24} color="black" />
                    </View>
                )
             }}
             renderRightButton={() => {
                 return (
                     <TouchableOpacity activeOpacity={0.6}
                     onPress={() => {
                             console.log(ref.current.getAddressText());
                             setCity(ref.current.getAddressText());
                             // Get text value of GoogleAutocomplete
                     }}
                     >
                     <View style={{
                         flexDirection:"row",
                            alignItems: "space-between",
                            marginRight: 10,
                            backgroundColor: "white",
                            padding:10,
                            borderRadius: 20,
                     }}>
                            <AntDesign name="clockcircle" size={24} color="black" style={{
                                marginRight: 6,
                            }} />
                            <Text>Search</Text>
                     </View>
                     </TouchableOpacity>
                 )
             }}
             >
            
                    
                </GooglePlacesAutocomplete>
         </View>
     )
 }

 export default SearchBar;