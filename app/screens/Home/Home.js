import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props) => {
  const handleLogout = async () => {
    try {
      const getValue = await AsyncStorage.getItem('@accessToken');
      console.log(getValue)
      const value = await AsyncStorage.removeItem('@accessToken');
      console.log(value)
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   props.navigation.navigate("Auth")
    // }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome, Sagar</Text>
      <Text onPress={handleLogout}>LOGOUT</Text>
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
