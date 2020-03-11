
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from  '@react-navigation/stack';
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
} from 'react-native';
import Login from './android/files/Login';
import Loginform from './android/files/Loginform';
import home from './android/files/home'
import loginhome from './android/files/loginhome';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Stack = createStackNavigator();

export default class App extends React.Component{
  render()
  {
    return(
      // <Login />
      <NavigationContainer>
      <Stack.Navigator>

        
        <Stack.Screen name="Home" component={Login} />
        {/* <Stack.Screen name="loginform" component={Loginform} /> */}

        
        <Stack.Screen name="loginhome" component={loginhome} />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
      

     
     

// const styles=StyleSheet.create({
//   wrapper:{
//     backgroundColor:'#eeff41' ,
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   title:
//   {
//     color:'black',
//     fontSize: 40,
//     fontWeight:'bold'
//   },
//   subtitles:
//   {
//     color:'blue',
//     fontWeight:'200',
//     paddingBottom:20
//   },
//   titleWrapper:
//   {
//     justifyContent:'center',
//     flex:1
//   }
  

  

// });



