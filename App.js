import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import ReactNavigation from "./navigation";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
export default function App() {
  return (
     <ReactNavigation/>
  );
}
