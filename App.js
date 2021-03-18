import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Gabriel', id: '1'},
    {name: 'Yoshi', id: '2'},
    {name: 'Mario', id: '3'},
    {name: 'Luigi', id: '4'},
    {name: 'Peach', id: '5'},
    {name: 'Toad', id: '6'},
    {name: 'Bowser', id: '7'},
  ])
  const pressHandler = (id) =>{
    console.log(id)
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id)
    })
  }
   

  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={(item)=> item.id} 
        numColumns={2}
        data={people}
        renderItem={({item})=> (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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
    padding:20,
    backgroundColor: 'lightblue',
    fontSize: 24,
    marginHorizontal:10,
  }
});
