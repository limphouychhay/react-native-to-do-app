import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function DetailPage() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Item Detail:</Text>
        <Text style={styles.textBody}>
          ID: 123 {'\n'}
          <Text>Todo: Testing</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
