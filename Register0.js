import React from 'react';
import {StyleSheet, TextInput, Image, Text, View, TouchableOpacity} from 'react-native';

class Register0 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {    
      username: '',
      password: '',
    }
  }

  naviagteUser = () => {
    const {username} = this.state;
    const {password} = this.state; 
    this.props.navigation.navigate('Register1', 
        {username: username, password: password})
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style= {styles.backgroundImage}
          source= {require('./assets/newBG3.png')}
        />
        <Text style={styles.titleText}>Register Your Odometer Terminator Account...</Text>
        <TextInput
          keyboardType = 'default'
          onChangeText={(username) => this.setState({ username })}
          placeholder='username'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          onChangeText={(password) => this.setState({ password })}
          placeholder='password'
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TouchableOpacity
          style={[styles.buttonContainer, styles.button]}
          onPress={this.naviagteUser}
        >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.button]}
          onPress={()=>this.props.navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'Courier',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -10,
    textAlign: 'left',
    marginBottom: 50,
    marginRight: 20
  },
  backgroundImage:{
    position: 'absolute',
    justifyContent: 'center',
    top: null,
    left: null,
    bottom: null,
    right: null,
  },
  input: {
    width: 200,
    fontFamily: 'Courier',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:200,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'white',
  },
  button: {
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

});

export default Register0;