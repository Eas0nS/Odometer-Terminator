import React from 'react';
import { StyleSheet, Text, Picker, Image, View, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Register2 from './Register2';

class Register3 extends React.Component {
  render() {
    return(
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Image 
        style= {styles.backgroundImage}
        source= {require('./assets/bg2.png')}
      />
      <Image
        style= {styles.logo}
        source={require('./assets/logo.png')}
      />
      <KeyboardAvoidingView
          style={styles.container2}
          behavior="padding"
      >
        <Text style={styles.titleText}>Register</Text>
        <Text style={styles.titleText}>Confirm Your Information:</Text>
        <Text style={styles.other_info}>Name:</Text>
        
        
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'white',
    borderColor: 'white',
    opacity: 0.9,
    width: 330,
    height: 450,
    borderRadius:30,
    borderWidth: 1,
    paddingTop: 10
  },
  backgroundImage:{
    position: 'absolute',
    justifyContent: 'center',
    top: null,
    left: null,
    bottom: null,
    right: null,
    opacity: 0.8,
  },
  logo:{
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10
  },
  other_info:{
    paddingLeft: 40,
    fontSize: 15,
    justifyContent: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A8FC8',
    borderColor: '#5A8FC8',
    width: 110,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginLeft: 35, 
    marginRight: 5,
    marginTop: 5,
  },
  buttonText:{
    fontSize: 17,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginLeft: 40,
    width: 250,
    fontSize: 15,
    height: 37,
    padding: 10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 7,
    marginTop: 7,
    opacity: 0.6,
  },
});

export default Register3;