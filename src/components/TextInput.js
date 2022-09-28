import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export function CustomTextInput(props) {
  const {addHandler} = props;
  const [inputItem, setInputItem] = useState('');

  function inputHandler(text) {
    setInputItem(text);
  }

  function addInputHandler() {
    if (inputItem !== '') {
      addHandler(inputItem);
    }

    setInputItem('');
  }

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.textInput}
        placeholder="Input To Do Here"
        clearButtonMode="while-editing"
        enablesReturnKeyAutomatically={true}
        returnKeyType="done"
        onChangeText={inputHandler}
        value={inputItem}
      />
      <View style={styles.buttonContainer}>
        <Button title="Done" onPress={addInputHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    height: 50,
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 0.25,
  },
});
