import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

// Actions
import {signOut} from '../../store/action';

const Home = (props) => {
  const handleLogout = () => {
    props.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Welcome, Sagar</Text>
      <Text
        onPress={handleLogout}
        style={{backgroundColor: '#444', color: '#fff', padding: 5}}>
        LOGOUT
      </Text>
    </View>
  );
};
export default connect(null, {signOut})(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
