import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }
    
  userLogin = () =>{
 
    const { username }  = this.state ;
    const { password }  = this.state ;
    
    fetch('http://localhost:8080/odometer_terminator/user_login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
        if(responseJson === 'Correct Username and Password') {
          this.props.navigation.navigate('Dashboard', 
            {username: username, password: password});
        } else{
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);

      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style= {styles.backgroundImage}
          source= {require('./assets/bg2.png')}
        />
        <Text style={styles.titleText}>Welcome to</Text>
        <Text style={styles.titleText}>Odometer Terminator</Text>
        <Image
          style={{ width: 200, height: 100}}
          source={require('./assets/logo.png')}
        />
        <TextInput
          keyboardType = 'default'
          onChangeText={(username) => this.setState({ username })}
          placeholder='username'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.userLogin}
        >
        <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
             this.props.navigation.navigate('Register0')}
        >
        <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>


      



        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.8
  },
  container: {
    flex: 1,
    fontFamily: 'Courier',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'Courier',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 200,
    fontFamily: 'Courier',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 15
  },
});

export default Login;