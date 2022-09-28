import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DetailPage = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Item Detail:</Text>
        <Text style={styles.textBody}>
          ID: {item.id} {'\n'}
          <Text>Todo: {item.text}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBody: {
    fontSize: 20,
  },
});
