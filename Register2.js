import React from 'react';
import { StyleSheet, Text, Image, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

class Register1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state_name: '',
      gender: '',
      age: '',
      maritial_status: '',
      violation:'',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image
          style = {styles.backgroundImage}
          source = {require('./assets/bg.png')}
        />
        <Text style={styles.titleText}>Your Basic Info</Text>
        <KeyboardAvoidingView
          style={styles.container2}
          behavior="padding"
        >
          <Text style={styles.other_info}>State*</Text>
          <TextInput
            value = {this.state.state_name}
            keyboardType = 'default'
            onChangeText={(state_name) => this.setState({ state_name })}
            style={styles.input}
          />
          <Text style={styles.other_info}>Gender*</Text>
          <TextInput
            value = {this.state.gender}
            keyboardType = 'default'
            onChangeText={(gender) => this.setState({ gender })}
            style={styles.input}
          />
          <Text style={styles.other_info}>Age*</Text>
          <TextInput
            value = {this.state.age}
            keyboardType = 'default'
            onChangeText={(age) => this.setState({ age })}
            style={styles.input}
          />
          <Text style={styles.other_info}>Maritial Status*</Text>
          <TextInput
            value = {this.state.maritial_status}
            keyboardType = 'default'
            onChangeText={(maritial_status) => this.setState({ maritial_status })}
            style={styles.input}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Register3')}
        >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Register1')}
        >
          <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    opacity: 0.7,
    width: 330,
    height: 390,
    borderRadius:30,
    borderWidth: 1,
    marginBottom: 15,
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
  titleText:{
    fontFamily: 'Courier',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -10,
    textAlign: 'left',
    marginBottom: 20,
    marginRight: 140
  },
  other_info:{
    paddingLeft: 40,
    fontSize: 15,
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'Courier',
    fontSize: 20,
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
  },
});

export default Register1;