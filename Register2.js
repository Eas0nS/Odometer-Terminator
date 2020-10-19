import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Register2 extends React.Component {
  render() {
    return (
      <View >
        <Text>Register2 ready</Text>
        <Button
          title="Back"
          onPress={() =>
            this.props.navigation.navigate('Register1')
          }
        />
      </View>
    );
  }
}

export default Register2;