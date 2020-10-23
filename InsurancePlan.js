import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class InsurancePlan extends React.Component {
  render() {
    return (
      <View >
        <Text>InsurancePlan</Text>
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

export default InsurancePlan;