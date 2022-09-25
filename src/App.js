import React from 'react';
import {StyleSheet, View} from 'react-native';

import RootNavigation from './navigation/RootNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
