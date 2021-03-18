import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Gabriel')
  const [person, setPerson] = useState({name: 'Mario', age: 40})
  const clickHandler = () => {
    setName('New name')
    setPerson({name: 'Luigi', age: 45})
  } 

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and he is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update states' onPress={clickHandler}/>
      </View>
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
  buttonContainer:{
    marginTop: 20
  }
});
