import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Gabriel')
  const [age, setAge] = useState(23)
   

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => setName(value)} />
        <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 49'
        onChangeText={(value) => setAge(value)} />
      <Text>Name: {name}, Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    margin: 5,
    width: 150,
    textAlign: 'center'
  }
});
