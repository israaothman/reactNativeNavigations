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

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Card, Title, Paragraph, Avatar,Button,BottomNavigation } from 'react-native-paper';

const profileImage = props => <Avatar.Icon {...props} icon="folder"/>

const MyCard = () =>{
    return(
       <Card>
         <Card.Title title='Esraa Othman' subtitle='subtitle' left={profileImage}  />
         <Card.Content>
            <Card.Cover source={{uri:'https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg'}} />
             <Title>Content title</Title>
             <Paragraph>this is the content of the card</Paragraph>
             <Card.Actions>
                <Button>Ok</Button>
                <Button>Cancel</Button>
             </Card.Actions>
         </Card.Content>
       </Card>
    )
}

const MusicRoute = () =>{
    return(
                <MyCard/> 
    );
}

const AlbumRoute = () => <Text>The Album screen</Text>
const RecentRoute = () => <Text>The Recent screen</Text>


const MyNav = () =>{
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'music' , title:'Music', icon:'music'},
        {key:'album' , title:'Album', icon:'folder-open'},
        {key:'recent' , title:'Recent', icon:'history'}
    ]);


    const renderScene = BottomNavigation.SceneMap({
        music:MusicRoute,
        album:AlbumRoute,
        recent:RecentRoute
    })


    return(
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
          renderIcon={({route, focused,color})=>(
            <Icon name={route.icon} size={24} color={color} />
          )}
        
        />
    );
} 


function App(): JSX.Element {
  return (
    <>
        {/* <Text>hi</Text>
        <Icon name='home' size={50} color={'pink'}/>
        <Icon.Button name='facebook'  onPress={()=>alert('Welcome')}/> */}
        <SafeAreaProvider>
        <MyNav/>
        </SafeAreaProvider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
