import React from 'react';
import { StyleSheet, Alert, Text, Image, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class Register1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.route.params.username,
      password: this.props.route.params.password,
      email: this.props.route.params.email,
      phone: this.props.route.params.phone,
      address: this.props.route.params.address,
      city: this.props.route.params.city,
      state_name: this.props.route.params.state_name,
      zip: this.props.route.params.zip,
      gender: '',
      age: '',
      maritial_status: '',
    }
  }

  userRegistration = () =>{
    const {username} = this.state;
    const {password} = this.state;   
    const {email} = this.state;
    const {phone} = this.state;
    const {address} = this.state;
    const {city} = this.state;
    const {state_name} = this.state;
    const {zip} = this.state;
    const {gender} = this.state;
    const {age} = this.state;
    const {maritial_status} = this.state;
  
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
        state: state_name,
        city: city,
        zip: zip,
        gender: gender,
        age: age,
        maritial_status: maritial_status,
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
          source = {require('./assets/newBG3.png')}
        />
        <Text style={styles.titleText}>Your Demographic Info</Text>
        <KeyboardAvoidingView
          style={styles.container2}
          behavior="padding"
        >
          <Text style={styles.other_info}>Gender*</Text>
          <View style={styles.input}>
            <RNPickerSelect
              style={styles.other_info}
              onValueChange={(gender) => this.setState({ gender })}
              items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
            />
          </View>
          <Text style={styles.other_info}>Age*</Text>
          <TextInput
            value = {this.state.age}
            keyboardType = 'default'
            onChangeText={(age) => this.setState({ age })}
            style={styles.input}
          />
          <Text style={styles.other_info}>Maritial Status*</Text>
          <View style={styles.input}>
            <RNPickerSelect
              style={styles.other_info}
              onValueChange={(maritial_status) => this.setState({ maritial_status })}
              items={[
                { label: 'Single', value: 'single' },
                { label: 'Married', value: 'married' },
              ]}
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          onPress={this.userRegistration}
        >
          <Text style={styles.buttonText}> Register </Text>
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
    height: 300,
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
    marginLeft: -40
  },
  other_info:{
    paddingLeft: 40,
    fontSize: 15,
    justifyContent: 'flex-start',
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
});

export default Register1;