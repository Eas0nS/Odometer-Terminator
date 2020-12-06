import React from 'react';
import { StyleSheet, Text, Image, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

class Register1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.route.params.username,
      password: this.props.route.params.password,
      email: '',
      phone: '',
      address: '',
      city: '',
      zip:'',
    }
  }

  userRegistration = () =>{
    const {username} = this.state;
    const {password} = this.state;   
    const {email} = this.state;
    const {phone} = this.state;
    const {address} = this.state;
    const {city} = this.state;
    const {zip} = this.state;
  
    fetch('http://localhost:8080/odometer_terminator/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username, 
        password: password,
        email: email,
        phone: phone,
        address: address,
        city: city,
        zip: zip
      })
      }).then((response) => response.json())
          .then((responseJson) => {
            Alert.alert(responseJson);   
          }).catch((error) => {
            console.error(error);
          });
      this.props.navigation.navigate('Login')
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
          <Text style={styles.other_info}>Email Address*</Text>
          <TextInput
            value = {this.state.email}
            keyboardType = 'default'
            onChangeText={(email) => this.setState({ email })}
            placeholder='12345@gmail.com'
            style={styles.input}
          />
          <Text style={styles.other_info}>Phone Number*</Text>
          <TextInput
            value = {this.state.phone}
            keyboardType = 'default'
            onChangeText={(phone) => this.setState({ phone })}
            placeholder='123-456-7890'
            style={styles.input}
          />
          <Text style={styles.other_info}>Address*</Text>
          <TextInput
            value = {this.state.address}
            keyboardType = 'default'
            onChangeText={(address) => this.setState({ address })}
            placeholder='123 Badger St.'
            style={styles.input}
          />
          <Text style={styles.other_info}>City*</Text>
          <TextInput
            value = {this.state.city}
            keyboardType = 'default'
            onChangeText={(city) => this.setState({ city })}
            placeholder='Madison'
            style={styles.input}
          />
          <Text style={styles.other_info}>Zip Code*</Text>
          <TextInput
            value = {this.state.zip}
            keyboardType = 'default'
            onChangeText={(zip) => this.setState({ zip })}
            placeholder='12345'
            style={styles.input}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Register2')}
        >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.userRegistration}
        >
          <Text style={styles.buttonText}> Register </Text>
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