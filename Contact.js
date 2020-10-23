import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Contact extends React.Component {
  render() {
    return (
      <View >
        <Text>Contact</Text>
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

export default Contact;