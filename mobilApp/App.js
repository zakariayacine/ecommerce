import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./screen/HomeScreen";
import DetailsInfoScreen from "./screen/Cart";
;

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="FormEmpAdd">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Cart" component={DetailsInfoScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
