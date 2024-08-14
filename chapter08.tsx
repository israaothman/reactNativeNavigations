/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Pressable
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();

const Home = () => {
    return (
        <Text style={{ margin: 50 }}>Welcome  </Text>
    )
}

const Dashboard = () => {
    return(
        <Text>This is the dashboared </Text>
    )
}

const Login = ({navigation}) => {
                     // 0         1 
   const usernames = ["esraa","ahmad"];
   const passwords = ["123","456"];
   const role = ["admin","user"];


    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const validateInput = () =>{
          const indexOfUsername = usernames.indexOf(username);
          const indexOfPassword = passwords.indexOf(password);

          if(indexOfUsername > -1 && indexOfUsername === indexOfPassword){
            alert('Login successfuly');
            if(indexOfUsername == 0){
               navigation.navigate('dash');  
            }else{
                navigation.navigate('home');
            }
          }else{
            alert('Username or password incorrect');
          }


    }

    return (
        <View style={{backgroundColor:'white'}}>
            <View>
            <Image source={require('./Assets/Img/logo.png')} style={styles.logo}/>
            <Image source={require('./Assets/Img/show.png')} style={{ resizeMode: 'contain', width: 400, height: 300, marginBottom: 7 }}/>
            </View>

            <TextInput placeholder='UserName' style={styles.input} onChangeText={(name)=>setUsername(name)} />
            <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} onChangeText={(pass)=>setPassword(pass)}/>

            <View>
                <Text style={{marginLeft:250, color:'#00ADEE'}}>Forget Password ?</Text>
            </View>

             <Pressable style={styles.button} >
               <Text style={styles.login} onPress={validateInput}>Login</Text>    
            </Pressable>   

            <View>
              <Text style={styles.register}>Don't have an account ? 
                 <Text style={{color:'#00ADEE'}}>Register</Text>
                </Text>    
            </View>    
       
        </View>
        
    )
}



const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login} options={{headerShown:false}} />
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='dash' component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    //logo
    logo: {
        width: 300,
        height: 80,
        position: 'relative',
        left: 60,
        top: 28,
        resizeMode: 'contain',
        marginBottom: 20
    },

    //gesiter page
    register: {
        position: 'relative',
        top: 40,
        left: 45,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#212529',
    },
    //login text
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'relative',
        left: 155,
        color: 'white',
        top: 10,
        opacity: 1
    },
    //login button
    button: {
        //  backgroundColor:'#9d9d9d99',
        backgroundColor: '#00ADEE',
        borderRadius: 20,
        color: 'black',
        height: 50,
        position: 'relative',
        top: 10,
        width: 390,
        left: 10,
    },
    //title
    header: {
        fontFamily: 'Gotham-Book'
        , fontWeight: 'bold',
        fontSize: 28,
        alignItems: 'center',
        color: '#4d4d4d',
        marginTop: -62,
        marginBottom: 15,
        position: 'relative',
        // left:150,
        left: 15,
    },
    //all input
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        color: 'black',
        borderColor: '#c0c0c0',
        paddingLeft: 20

    },
    home: {
        color: '#212529',
        fontWeight: 'bold',
        position: 'relative',
        top: 55,
        left: 157,
        fontSize: 15,
        textDecorationLine: 'underline',
    }
});

export default App;
