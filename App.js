import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, FlatList} from 'react-native';
import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import { useState } from 'react';
import Todo from './src/Todo';
// view = div
// text = p 

export default function App() {

  const [todos, setTodos]  = useState([])

  const addTodo = (title) => {
    /* 
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }
  setTodos((prevTodos)=> {
      return [
        ...prevTodos, newTodo
      ]
    })
   */

    setTodos((prevTodos)=> [
      ...prevTodos, {
        id: Date.now().toString(),
        title: title
      }
    ]
    )
  }
  return (
    <View  >
      <Navbar title={"Todo app"} />
      <View style={styles.container}>
      <AddTodo  onSubmit={addTodo} />



      <FlatList 
      keyExtractor={item=>item.id}
      data={todos}
      renderItem={({item})=>(
        <Todo todo={item}  />
      )}
      />
 {/*
      <View>
      {
        todos.map((todo, index)=>(
           <Todo todo={todo} key={todo.id} />
          ))
        }
      </View>
          */}



      </View>
  {/*  
      return <Text key={todo.id}>
        {todo.title}
      </Text>
    <Text style={styles.text}>HELукпкуLO</Text>
      <Text>HELукпкуLO</Text>
    */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 /* container: {
    flex: 1,
   //height:300 ,
    backgroundColor: 'black',
   alignItems: 'center',
    justifyContent: 'center',
  },
  text:  {
color: "#fff",
fontSize: 26
  }, */
  container: {
paddingHorizontal: 30,
paddingVertical: 20
  }
}); 

//npm i expo-cli --global
//expo init my-new-project
//npx expo install react-native-web react-dom @expo/metro-runtime
//https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www
//npm start
