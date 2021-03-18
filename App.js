import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './components/header'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy something', key: '1'},
    {text: 'create something', key: '2'},
    {text: 'play something', key: '3'},
  ])

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop:20,
  }
});
