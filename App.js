import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Dashboard from './Dashboard';
import Register1 from './Register1';
import Register2 from './Register2';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen
            name="Login"
            component={Login}
          />
          
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />

          <Stack.Screen
            name="Register1"
            component={Register1}
          />
          
          <Stack.Screen
            name="Register2"
            component={Register2}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;