import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ReportAccident extends React.Component {
  render() {
    return (
      <View >
        <Text>ReportAccident</Text>
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

export default ReportAccident;