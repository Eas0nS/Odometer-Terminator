import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Appointment extends React.Component {
  render() {
    return (
      <View >
        <Text>Appointment</Text>
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

export default Appointment;