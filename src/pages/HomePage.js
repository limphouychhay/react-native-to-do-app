import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import {CustomTextInput, ListItem} from '../components/Component';

export const HomePage = ({navigation}) => {
  const [todoList, setTodoList] = useState([]);

  function addHandler(item) {
    setTodoList(currentItem => [...currentItem, {text: item, id: uuid.v4()}]);
  }

  function deleteHandler(id) {
    setTodoList(currenItem => {
      return currenItem.filter(item => item.id !== id);
    });
  }

  const renderItem = ({item}) => (
    <ListItem
      item={item}
      deleteHandler={deleteHandler}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <CustomTextInput addHandler={addHandler} />
      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingVertical: 10,
  },
});
