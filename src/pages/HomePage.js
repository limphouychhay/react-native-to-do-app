import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

export function HomePage() {
  const mockList = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.listContainer}>
      <View style={styles.listItem}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.textInput}
          placeholder="Input To Do Here"
          clearButtonMode="while-editing"
          enablesReturnKeyAutomatically={true}
          returnKeyType="done"
        />
        <View style={styles.buttonContainer}>
          <Button title="Done" />
        </View>
      </View>
      <FlatList
        data={mockList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
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
  listContainer: {
    padding: 10,
  },
  listItem: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
