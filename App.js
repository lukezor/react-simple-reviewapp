import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Gabriel', key: '1'},
    {name: 'Yoshi', key: '2'},
    {name: 'Mario', key: '3'},
    {name: 'Luigi', key: '4'},
    {name: 'Peach', key: '5'},
    {name: 'Toad', key: '6'},
    {name: 'Bowser', key: '7'},
  ])
   

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item:{
    marginTop: 24,
    padding:30,
    backgroundColor: 'lightblue',
    fontSize: 24
  }
});
