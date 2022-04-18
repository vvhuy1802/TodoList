import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

import Popup from './scr/Popup';
import Task from './scr/Task';


export default function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [listTaskitems, setListTaskitems] = React.useState([]);

  const newTask = (object) => {
    if (object == '') { }
    else {
      setListTaskitems([...listTaskitems, object]);
    }
    setModalOpen(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Task's Today!</Text>
        <View>
          {
            listTaskitems.map((items) => {
              return <Task text={items} />
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        style={styles.writeTaskWrapper}
      >
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Modal visible={modalOpen} animationType="slide">
        <Popup newTask={newTask} />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  addWrapper: {
    marginLeft: 270,
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  buttonSave: {
    flex: 0.7,
    flexDirection: 'row',
  },
  viewSave: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 100,
    left: 240,
    width: 90,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    shadowRadius: 2,
    elevation: 4,
    shadowOpacity: 0.4,
    paddingLeft: 24,
  },
  addText: {
    fontSize: 30
  },
});