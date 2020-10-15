import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Dashboard extends React.Component {
  render() {
    return (
      <View >
        <Text>Dashboard</Text>
        <Button
          title="Logout"
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        />
      </View>
    );
  }
}

export default Dashboard;