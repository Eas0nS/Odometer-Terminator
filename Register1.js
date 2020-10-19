import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

class Register1 extends React.Component {
    state = {
        email: '',
        phone: '',
        address: '',
        city: '',
        zip:'',
    };
    
    onRegister() {
        const { email, phone, address, city, zip} = this.state;
        Alert.alert('Credentials', `email: ${email} + phone: ${phone} + address: ${address}`);
      }

    render() {
        return (
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
          >
            <Image 
              style= {styles.backgroundImage}
              source= {require('./assets/bg4.png')}
            />
            <Image
              style= {styles.logo}
              source={require('./assets/logo.png')}
            />
            <KeyboardAvoidingView
              style={styles.container2}
              behavior="padding"
            >
            <Text style={styles.titleText}>Signup for Odometer Terminator</Text>
            <Text style={styles.contact_info}>Contact Info:</Text>

            <Text style={styles.other_info}>Email Address*</Text>
            <TextInput
              value = {this.state.email}
                    keyboardType = 'default'
                    onChangeText={(email) => this.setState({ email })}
                    placeholder='12345@gmail.com'
                    placeholderTextColor = 'black'
                    style={styles.input}
                />

                <Text style={styles.other_info}>Phone Number*</Text>
                <TextInput
                    value = {this.state.phone}
                    keyboardType = 'default'
                    onChangeText={(phone) => this.setState({ phone })}
                    placeholder='123-456-7890'
                    placeholderTextColor = 'black'
                    style={styles.input}
                />

                <Text style={styles.other_info}>Address*</Text>
                <TextInput
                    value = {this.state.address}
                    keyboardType = 'default'
                    onChangeText={(address) => this.setState({ address })}
                    placeholder='123 Badger St.'
                    placeholderTextColor = 'black'
                    style={styles.input}
                />

                <Text style={styles.other_info}>City*</Text>
                <TextInput
                    value = {this.state.city}
                    keyboardType = 'default'
                    onChangeText={(city) => this.setState({ city })}
                    placeholder='Madison'
                    placeholderTextColor = 'black'
                    style={styles.input}
                />

                <Text style={styles.other_info}>Zip Code*</Text>
                <TextInput
                    value = {this.state.zip}
                    keyboardType = 'default'
                    onChangeText={(zip) => this.setState({ zip })}
                    placeholder='12345'
                    placeholderTextColor = 'black'
                    style={styles.input}
                />

                <View style={{ flexDirection: 'row' }}>
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
                    this.props.navigation.navigate('Register2')}
                  >
                    <Text style={styles.buttonText}> NEXT </Text>
                  </TouchableOpacity>
                </View>
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
    //flex: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
    opacity: 0.9,
    width: 330,
    height: 500,
    borderRadius:10,
    borderWidth: 1,
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
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  contact_info:{
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
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
    marginTop: 15,
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

export default Register1;