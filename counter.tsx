/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState('');

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    setCount(count - 1);  
  };

  const updateCount = () =>{
       const value = parseInt(initialValue, 10);
      if(!isNaN(value)){
        setCount(value);
      }
  }

  return (
    <View style={styles.container}>
        <Text>Enter starting number : </Text>
       <TextInput  style={styles.input}
         keyboardType="numeric"
         onChangeText={text => setInitialValue(text)}
         placeholder='Enter a number'
       />
       <Button title="Set Count" onPress={updateCount}/>
      <Text style={styles.countText}>Count: {count}  </Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 32,
    marginBottom: 20,
  },
  input:{
    height: 40,
    borderColor : 'grey',
    borderWidth : 1,
    width : '100%',
    marginBottom : 20,
  }
});

export default Counter;
