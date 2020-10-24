import React from 'react';
import { Alert, AppRegistry, StyleSheet, TextInput, Image, Text, View, Button, TouchableOpacity} from 'react-native';


class Register0 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {    
        username: '',
        password: '',
    }
  }
  
  userRegistration = () =>{
 
    const {username} = this.state;
    const {password} = this.state;   

    fetch('http://localhost:8080/odometer_terminator/user_registration.php', {
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
           Alert.alert(responseJson);   
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
        <Text style={styles.titleText}>Register</Text>
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
            style={styles.button}
            onPress={this.userRegistration}
            >
            <Text style={styles.buttonText}> REGISTER </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>
                this.props.navigation.navigate('Login')}
            >
            <Text style={styles.buttonText}> BACK </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>
                this.props.navigation.navigate('Register1')}
            >
            <Text style={styles.buttonText}> NEXT </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText:{
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
    },
    backgroundImage:{
      position: 'absolute',
      justifyContent: 'center',
      top: null,
      left: null,
      bottom: null,
      right: null,
      opacity: 1.0,
    },
    button: {
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

export default Register0;