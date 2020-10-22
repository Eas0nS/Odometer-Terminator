import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

class PersonalAcc extends React.Component {
  render() {
    return (
        <Button
          title="Back"
          onPress={() =>
            this.props.navigation.navigate('Dashboard')
          }
        />
    );
  }
}


export default PersonalAcc;