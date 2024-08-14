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

import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Button,
    FlatList,
    TextInput
} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';



function App(): JSX.Element {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");
    const [courses, setCourses] = useState([]);
    const [courseId, setCourseId] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');


    // useEffect(() => {
    // //    fetch("https://jsonplaceholder.typicode.com/posts")
    // //         .then(response => response.json())
    // //         .then(jsonResponse =>{
    // //             setData(jsonResponse);
    // //             console.log(jsonResponse);
    // //         });

    //    axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then(response => setData(response.data));
    // },[]);

    useEffect(() => {

        axios.get("https://73cb-94-142-54-34.ngrok-free.app")
            .then(res => setMessage(res.data))
    }
        , []);


    const getCourses = () => {

        axios.get("https://73cb-94-142-54-34.ngrok-free.app/course")
            .then(res => setCourses(res.data));
    }


    const addNewCourse = () => {
        const newCourse = {
            "courseId": courseId,
            "title": title,
            "status": status
        }

        axios.post("https://73cb-94-142-54-34.ngrok-free.app/new", newCourse)
             .then(res => {
                console.log(res.data)});
    }


    return (
        <>
            <View style={{ margin: 50 }}>
                {/* <FlatList
       data={data}
       renderItem={({item})=>(
        <View>
            <Text>id : {item.id}</Text>
            <Text>title : {item.title}</Text>
            <Text>body : {item.body}</Text>
        </View>
       )}
      /> */}
                <Text>{message}</Text>
                <Button title="get Courses" onPress={getCourses} />
                <FlatList
                    data={courses}
                    renderItem={({ item }) => (
                        <View>
                            <Text>id : {item.courseId}</Text>
                            <Text>title : {item.name}</Text>
                            <Text>status : {item.status}</Text>
                        </View>
                    )}
                />
                <View style={{ backgroundColor: "pink", marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Add new Course </Text>
                    <TextInput placeholder='course id' onChange={(id) => setCourseId(id)} />
                    <TextInput placeholder='title' onChange={(titl) => setTitle(titl)} />
                    <TextInput placeholder='status' onChange={(sts) => setStatus(sts)} />

                    <Button title="save" onPress={addNewCourse} />

                </View>
            </View>
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
