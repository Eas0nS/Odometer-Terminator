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
      state_name: '',
      zip:'',
    }
  }

  naviagteUser = () => {
    const {username} = this.state;
    const {password} = this.state; 
    const {email} = this.state; 
    const {phone} = this.state; 
    const {address} = this.state; 
    const {city} = this.state; 
    const {state_name} = this.state;
    const {zip} = this.state;
    this.props.navigation.navigate('Register2', 
        {username: username, password: password, email: email, 
         phone: phone, address: address, city: city, 
         state_name: state_name, zip: zip})
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image
          style = {styles.backgroundImage}
          source = {require('./assets/newBG3.png')}
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
          <Text style={styles.other_info}>State*</Text>
          <TextInput
            value = {this.state.state_name}
            keyboardType = 'default'
            onChangeText={(state_name) => this.setState({ state_name })}
            placeholder='Wisconsin'
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
          onPress={this.naviagteUser}
        >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Register0')}
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
    height: 450,
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
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#3498db',
  },
  buttonText:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
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