import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import React from 'react';
const Tab = createBottomTabNavigator();

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
} from 'react-native';
export default class home extends React.Component{
    render(){
        return(
          
          <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        
      );
}
}
function HomeScreen() {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Home Screen</Text>
</View>
);
}

const Stack = createStackNavigator();

function SettingsScreen() {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>SettingsScreen</Text>
</View>
);
}