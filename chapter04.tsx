/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React , {useLayoutEffect, useState}from 'react';
import {  StyleSheet, Image, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen ({navigation} : any) {
    const [count, setCount] = useState(0);

 useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight : () => (
            <Button title='add One' onPress={()=> setCount((c) => c + 1 )}/>
        )
    })
 },[setCount,navigation]);
 
 return (
        <>
        <Text>This is the Home Screen</Text>
        <Text>counter : {count}</Text>
        <Button title='Go To Details' onPress={()=>navigation.navigate('Details',{userId : 10, userName : "Esraa"})}/>
        </>
    )
}


function DetailsScreen ({route,navigation}:any) {
    const userId = route.params.userId;
    const userName = route.params.userName;
    return (
        <>
        <Text>This is the Details Screen</Text>
        <Text>The Id is {userId} and name is {userName}</Text>

        <Button title='More' onPress={()=>navigation.navigate('MoreDetails')}/>
        </>
        )
}

function MoreDetailsScreen ({navigation}:any) {
    return (
        <>
        <Text> More Details</Text>
        <Button title='Go To Home' onPress={()=>navigation.popToTop()} />
        <Button title='Go Back' onPress={()=>navigation.goBack()} />

        </>
    )
}

function SettingsScreen (){
    return(
        <Text>Settings </Text>
    )
}

const Stack = createNativeStackNavigator(); 
const Tap = createBottomTabNavigator();


function HomeAndDetails () {
    return(
            <Stack.Navigator>
             <Stack.Screen name='Home' component={HomeScreen}
              options={{
                title : 'Tahaluf',
                headerStyle : {
                    backgroundColor : 'pink'
                },
                // headerRight : () =>(
                //   <Button title='click' onPress={()=>alert('Welcome')}/>
                // )
              }}
             />
             <Stack.Screen name='Details' component={DetailsScreen} initialParams={{userId : 1}}/>
             <Stack.Screen name='MoreDetails' component={MoreDetailsScreen}/>
           </Stack.Navigator> 
    )
}


function App(): JSX.Element {

    return(
        <NavigationContainer>
           {/* <Stack.Navigator>
             <Stack.Screen name='Home' component={HomeScreen}
              options={{
                title : 'Tahaluf',
                headerStyle : {
                    backgroundColor : 'pink'
                },
                // headerRight : () =>(
                //   <Button title='click' onPress={()=>alert('Welcome')}/>
                // )
              }}
             />
             <Stack.Screen name='Details' component={DetailsScreen} initialParams={{userId : 1}}/>
             <Stack.Screen name='MoreDetails' component={MoreDetailsScreen}/>
           </Stack.Navigator> */}
           <Tap.Navigator screenOptions={{headerShown:false}}>
              <Tap.Screen name='Home' component={HomeAndDetails} />
              <Tap.Screen name='Settings' component={SettingsScreen}/>
           </Tap.Navigator>

        </NavigationContainer>
    )
}

export default App;
