

import React from 'react';
import {KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
  
} from 'react-native';
  
 
import Loginform from './Loginform'


export default class Login extends React.Component{
   
    
  render()
  {
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../files/images/i.png')}
                    />

                    <Text style={styles.title}>an app made for food ordereing system</Text>

            </View>

            <TextInput 
                  placeholder="username or email"
                  placeholderTextColor='blue'
                  onSubmitEditing={()=>this.passwordInput.focus()}
                  style={styles.input}
                  />
                  <TextInput 
                   placeholder="password"
                   placeholderTextColor='blue'
                   secureTextEntry
                   
                  style={styles.input}
                  ref={(input)=>this.passwordInput=input}
                  />

                  <TouchableOpacity style ={styles.buttonContainer}
                
                onPress={()=>this.props.navigation.navigate('loginhome')}
                  >
                      
                      <Text style={styles.buttonText}>
                          LOGIN
                      </Text>
                  </TouchableOpacity>

           
        
            </KeyboardAvoidingView>
 
        
     
    );
  }
  
}


const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#00e676',
        
    
    },
    logoContainer:
    {
        alignItems:"center",
        flexGrow:1,
        justifyContent:"center"

    },
    logo:{
        width:350,
        height:200,
        
    },
    title:
    {
        color:'white',
        marginTop:10
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:20,
        color:'black',
        paddingHorizontal:20
    },
    buttonContainer:
    {
        backgroundColor:'red',
        paddingVertical:10
    },
    buttonText:
    {
        textAlign:'center',
        color:'white'
        
    }

})
      