/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Image, Text, View, FlatList } from 'react-native';
import Counter from './Counter';  // Ensure the path is correct
import Navigation from './Navigation'; // Ensure the path is correct'

const App1 = () => {

    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
    };


    return (
        <SafeAreaView style={styles.container}>
            {/* <Counter /> */}
            <ScrollView horizontal>
                <Text>Hello</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text>Middle</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text>Last</Text>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});



function App2(): JSX.Element {
    return (
        <FlatList
            data={
                [{ key: "Esraa" },
                { key: "Dana" },
                { key: 'Devin' },
                { key: 'Dan' },
                { key: 'Dominic' },
                { key: 'Jackson' },
                { key: 'test' },
                { key: 'hello' },
                { key: 'Ali' },
                { key: 'Mohammad' },
                { key: 'Ahmad' },
                ]
            }
            renderItem={({item})=> <Text style={{fontSize:70}}>{item.key}</Text>}
        />
    )
}



export default App;
