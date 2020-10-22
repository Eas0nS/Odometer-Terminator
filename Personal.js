import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Personal extends React.Component {
  render() {
    return (
      <View >
        <Text>Personal Account</Text>
        <Button
          title="Back"
          onPress={() =>
            this.props.navigation.navigate('Dashboard')
          }
        />
      </View>
    );
  }
}

export default Personal;