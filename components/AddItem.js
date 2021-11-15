import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont(); // loads fontawesome

const AddItem = ({addItem}) => {
  const [input, setInput] = useState('');
  const onChange = value => {
    setInput(value);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        placeholder="add item"
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(input)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={22} color="#4C566A" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 22,
    flex: 1,
    color: '#3B4252',
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#fff',
    padding: 25,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
