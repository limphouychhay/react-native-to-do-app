import React from 'react';
import {View, Pressable, Text, StyleSheet, Button} from 'react-native';

export function ListItem(props) {
  const {item, deleteHandler, navigation} = props;

  return (
    <View style={styles.listContainer}>
      <Pressable onPress={() => navigation.navigate('Detail', {item: item})}>
        <View style={styles.listItem}>
          <Text>{item.text}</Text>
          <Button title="Delete" onPress={deleteHandler.bind(this, item.id)} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 15,
  },
});
