import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome, Sagar</Text>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
