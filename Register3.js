import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, TouchableHighlight} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class Register2 extends React.Component {
  state = {
    card_num: '',
    card_type: '',
    exp: '',
    cvv: '',
    billing_addr:'',
    modalVisible: false
  };
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
    const { modalVisible } = this.state;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image 
          style= {styles.backgroundImage}
          source={require('./assets/bg.png')}
        />
        <Text style={styles.titleText}>Your Billing Info</Text>
        <KeyboardAvoidingView
          style={styles.container2}
          behavior="padding"
        >
          <Text style={styles.other_info}>Credit or Debit Card Number*</Text>
          <TextInput
            value = {this.state.card_num}
            keyboardType = 'default'
            onChangeText={(card_num) => this.setState({ card_num })}
            placeholder='123456789000'
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
            style={styles.input}
          />
          <Text style={styles.other_info}>Security Code*</Text>
          <TextInput
            value = {this.state.cvv}
            keyboardType = 'default'
            onChangeText={(cvv) => this.setState({ cvv })}
            placeholder='123'
            style={styles.input}
          />
          <Text style={styles.other_info}>Billing Address*</Text>
          <TextInput
            value = {this.state.billing_addr}
            keyboardType = 'default'
            onChangeText={(billing_addr) => this.setState({ billing_addr })}
            placeholder='123 Badger St, Madison, WI'
            style={styles.input}
          />

          </KeyboardAvoidingView>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Success!</Text>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                      this.props.navigation.navigate('Login');
                    }}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                  this.props.navigation.navigate('CameraPage')}
                >
                  <Text style={styles.buttonText}> Camera </Text>
                </TouchableOpacity>  
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                  this.props.navigation.navigate('OCRPage')}
                >
                  <Text style={styles.buttonText}> OCRPage </Text>
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
    //flex: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    //alignItems: 'center',
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
  logo:{
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
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
  contact_info:{
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom: 5,
    fontFamily: 'Courier',
    fontWeight: 'bold',
    fontSize: 18,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Register2;