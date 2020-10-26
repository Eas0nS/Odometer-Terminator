import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class Register2 extends React.Component {
  state = {
    card_num: '',
    card_type: '',
    exp: '',
    cvv: '',
    billing_addr:'',
  };
  updateCN = (card_num) => {
    this.setState({ card_num: card_num })
  }
  showCN = (card_num) => {
    alert('card num is: '+ this.state.card_num)
  }
  updateCT = (card_type) => {
    console.log(card_type),
    this.setState({ card_type: card_type });
  }
  onRegister() {
    const { card_num, card_type, exp, cvv, billing_addr} = this.state;
    Alert.alert('Credentials', `card_num: ${card_num} + card_type: ${card_type} + expiration: ${exp} + cvv: ${cvv} + billing_addr: ${billing_addr}`);
  }
  render() {
    return (
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
          <Text style={styles.other_info}>Credit or Debit Card Number*</Text>
          <TextInput
            //value = {this.state.card_num}
            keyboardType = 'default'
            onChangeText={this.updateCN}
            placeholder='123456789000'
            placeholderTextColor = 'black'
            style={styles.input}
          />
          <Text style={styles.other_info}>Card Type*</Text>
          <View style={styles.input}>
            <RNPickerSelect
              style={styles.other_info}
              onValueChange={this.updateCT}
              items={[
                { label: 'Visa', value: 'visa' },
                { label: 'MasterCard', value: 'mastercard' },
                { label: 'Amex', value: 'amex' },
              ]}
          />
          </View>
          <Text style={styles.other_info}>Expiration Date*</Text>
          <TextInput
            value = {this.state.exp}
            keyboardType = 'default'
            onChangeText={(exp) => this.setState({ exp })}
            placeholder='12/12/2020'
            placeholderTextColor = 'black'
            style={styles.input}
          />
          <Text style={styles.other_info}>Security Code*</Text>
          <TextInput
            value = {this.state.cvv}
            keyboardType = 'default'
            onChangeText={(cvv) => this.setState({ cvv })}
            placeholder='123'
            placeholderTextColor = 'black'
            style={styles.input}
          />
          <Text style={styles.other_info}>Billing Address*</Text>
          <TextInput
            value = {this.state.billing_addr}
            keyboardType = 'default'
            onChangeText={(billing_addr) => this.setState({ billing_addr })}
            placeholder='123 Badger St, Madison, WI'
            placeholderTextColor = 'black'
            style={styles.input}
          />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Register1')}
            >
              <Text style={styles.buttonText}> BACK </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Register3')}
            >
              <Text style={styles.buttonText}> NEXT </Text>
            </TouchableOpacity>
            <TouchableOpacity
              
              onPress={this.showCN}
            >
              <Text style={styles.buttonText}> showCN </Text>
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

export default Register2;