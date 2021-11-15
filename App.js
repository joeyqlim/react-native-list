import React, {useState} from 'react';
import {View, Alert, StyleSheet, FlatList} from 'react-native';
import {v4 as uuid} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      name: 'milk',
    },
    {
      id: uuid(),
      name: 'eggs',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = name => {
    if (!name)
      return Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    setItems(prevItems => {
      return [{id: uuid(), name}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="shopping list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B4252',
  },
});

export default App;
