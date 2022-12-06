import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from './components/header';
import Card from './components/card';

import dot from "./assets/dot.png";
import transparentDot from "./assets/transparent-dot.png";
import vector from "./assets/vector.png";
import titleVector from "./assets/title-vector.png";

export default function App() {
  const [ cards, setCards ] = useState([]);
  const [ newTask, setNewTask ] = useState({ ...cards[0] });

  useEffect(() => {

    setCards([
      {
        id: 'to-do',
        title: 'To-do',
        listImage: dot,
        data: [
          {
            id: 1,
            title: 'Get the trash out',
            description: 'This is the description'
          },
          {
            id: 2,
            title: 'Get the trash out',
            description: 'This is the description'
          },
        ]
      },
      {
        id: 'in-progress',
        title: 'In Progress',
        listImage: transparentDot,
        data: [
          {
            id: 3,
            title: 'Get the trash out 2',
            description: 'This is the description'
          },
        ]
      },
      {
        id: 'done',
        title: <View style={styles.imageTitle}>
                <Image source={titleVector} />
                <Text style={styles.title}>Done</Text>
              </View>,
        listImage: vector,
        data: [
          {
            id: 4,
            title: 'Get the trash out 3',
            description: 'This is the description'
          },
        ]
      },
    ]);

    setNewTask({...cards[0]})
  }, []);


  const handleChangeTaskType = () => {
    let nextType = 0;

    cards.map((item, index) => {
      if ( item.id === newTask.id && ( index + 1 ) < cards.length ) {
        nextType = index + 1;
      }

      if ( item.id === newTask.type && ( index + 1 ) > cards.length ) {
        nextType = 0;
      }
    });

    setNewTask({...cards[nextType]});
  }


  return (    
    <View style={styles.container}>
        
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        
        <Header />

        <TouchableOpacity style={styles.newTask}>
          <Image source={transparentDot} />
          <Text style={styles.newTaskText}>Start dragging this task to create a new one</Text>
        </TouchableOpacity>

        {
          cards.map(({id, title, listImage, data}) => (
            <Card
              key={id}
              id={id}
              title={title}
              listImage={listImage}
              data={data}
            />
          ))
        }
    

      </ScrollView>

      <TouchableOpacity 
        style={styles.newTaskDragging}
        onPress={handleChangeTaskType}
      >
        <Image source={newTask.listImage} />
        <Text style={styles.newTaskDraggingText}>Try dragging in to a card</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
  contentContainer: {
    paddingTop: 64,
    paddingHorizontal: '6%',
    paddingBottom: 112,
  },
  imageTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginLeft: 12
  },
  newTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    marginBottom: 48,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 14,
  },
  newTaskDragging: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
    borderWidth: 4,
    borderColor: '#cccccc',
    borderRadius: 12,
    position: 'absolute',
    bottom: 40,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 14,
  },
  newTaskDraggingText: {
    fontSize: 18,
    marginLeft: 12
  }
});
