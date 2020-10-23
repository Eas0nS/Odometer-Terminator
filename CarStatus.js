import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class CarStatus extends React.Component {
  render() {
    return (
      <View >
        <Text>CarStatus</Text>
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

export default CarStatus;