import React, {useState} from 'react';
import { Alert, FlatList, StyleSheet, Text, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy something', key: '1'},
    {text: 'create something', key: '2'},
    {text: 'play something', key: '3'},
  ])
  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const submitHandler = (text) =>{

    if(text.length >3){
      setTodos((prevTodos) =>{
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('Alert', 'Todos must be over 3 characters long', [
        {text: 'OK', onPress:() => console.log('alert closed')}
      ])
    }

  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding: 40
  },
  list:{
    flex:1,
    marginTop:20
  }
});
