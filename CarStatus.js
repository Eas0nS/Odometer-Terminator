import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, TouchableHighlight } from 'react-native';

class CarStatus extends React.Component {
  state = {
    car_brand: '',
    car_model: '',
    car_color: '',
    oil_mileage: '',
    license:'',
    modalVisible: false,
    TextInputDisableStatus: false,
    TextInputDisableStatus2: false,
    TextInputDisableStatus3: false,
    ButtonText : '>',
    ButtonText2 : '>',
    ButtonText3 : '>'
  };
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  onPressButton = () => {  
    this.setState({ TextInputDisableStatus: !this.state.TextInputDisableStatus });
    if (this.state.ButtonText == '>') {
      this.setState({ ButtonText : '✓' })
    } else {
      this.setState({ ButtonText : '>' })
    }
  }

  onPressButton2 = () => {  
    this.setState({ TextInputDisableStatus2: !this.state.TextInputDisableStatus2 });
    if (this.state.ButtonText2 == '>') {
      this.setState({ ButtonText2 : '✓' })
    } else {
      this.setState({ ButtonText2 : '>' })
    }
  }

  onPressButton3 = () => {  
    this.setState({ TextInputDisableStatus3: !this.state.TextInputDisableStatus3 });
    if (this.state.ButtonText3 == '>') {
      this.setState({ ButtonText3 : '✓' })
    } else {
      this.setState({ ButtonText3 : '>' })
    }
  }

  getDataUsingGet = () => {
    //GET request
    fetch('http://18.204.130.183:8000/health', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert('Your current insurance status: '+JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View
        style={styles.container}
        behavior="padding"
      >
        <KeyboardAvoidingView
          style={styles.container3}
          behavior="padding"
        >
          <Text style={styles.titleText}>Car Info</Text>
          <KeyboardAvoidingView>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <KeyboardAvoidingView style={styles.centeredView}>
                <KeyboardAvoidingView style={styles.modalView}>
                  <KeyboardAvoidingView style={styles.inline}>
                    <TextInput
                      value = {this.state.car_brand}
                      keyboardType = 'default'
                      onChangeText={(car_brand) => this.setState({ car_brand })}
                      placeholder='Car Brand'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input1}
                    />
                    <TextInput
                      value = {this.state.car_color}
                      keyboardType = 'default'
                      width = {100}
                      onChangeText={(car_color) => this.setState({ car_color })}
                      placeholder='Car Color'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input1}
                    />
                  </KeyboardAvoidingView>
                  <KeyboardAvoidingView>
                    <TextInput
                      value = {this.state.car_model}
                      keyboardType = 'default'
                      onChangeText={(car_model) => this.setState({ car_model })}
                      placeholder='Car Model'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input2}
                    />
                    <TextInput
                      value = {this.state.oil_mileage}
                      keyboardType = 'default'
                      onChangeText={(oil_mileage) => this.setState({ oil_mileage })}
                      placeholder='Oil Milage'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input2}
                    />
                    <TextInput
                      value = {this.state.license}
                      keyboardType = 'default'
                      onChangeText={(license) => this.setState({ license })}
                      placeholder='License Plate Number'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input2}
                    />
                  </KeyboardAvoidingView>
                  
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#0ad48a", borderColor: "#0ad48a", width: 70, height: 40, paddingLeft: 15, borderRadius: 20, }}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={{fontSize: 15, fontWeight : 'bold', color: 'white'}}>Save</Text>
                  </TouchableHighlight>
                </KeyboardAvoidingView>
              </KeyboardAvoidingView>
            </Modal>
            <TouchableHighlight
              style={styles.editbutton1}
              onPress={() => {
                this.setModalVisible(true);
              }}
              >
                <Text style={styles.editbuttontext}> Edit </Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
        
        <View
          style={styles.container2}
          behavior="padding"
        >
          <Text style={styles.other_info}>Car Brand</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus}
              value = {this.state.car_brand}
              keyboardType = 'default'
              onChangeText={(car_brand) => this.setState({ car_brand })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other_info}>Car Model</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus2 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus2}
              value = {this.state.car_model}
              keyboardType = 'default'
              onChangeText={(car_model) => this.setState({ car_model })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton2}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText2} </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other_info}>Car Color</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus3 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus3}
              value = {this.state.car_color}
              keyboardType = 'default'
              onChangeText={(car_color) => this.setState({ car_color })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton3}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText3} </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other_info}>Oil Milage</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info}>{this.state.oil_mileage}</Text>
          </View>
          <Text style={styles.other_info}>License Plate Number</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info}>{this.state.license}</Text>
          </View>
        </View>

        <View>

          <TouchableOpacity
            style={styles.ocrbutton}
            onPress={() =>
              this.props.navigation.navigate('OCRPage')}
          >
            <Text style={styles.editbuttontext}> Start OCR </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ocrbutton}
            onPress={this.getDataUsingGet}>
            <Text style={styles.editbuttontext}>
              Get Your Insurance Status
            </Text>
          </TouchableOpacity>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161620'
  },
  container3: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  editbuttontext:{
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editbutton1: {
    alignItems: 'center',
    backgroundColor: '#242433',
    borderColor: '#242433',
    width: 75,
    height: 40,
    padding: 7,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: -80,
  },
  closebutton: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderColor: 'orange',
    width: 75,
    height: 40,
    padding: 7,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: -80,
  },
  ocrbutton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 320,
    height: 50,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10
  },
  editbutton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 40,
    height: 40,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 10,
    marginBottom: 10
  },
  container2: {
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    borderLeftColor: '#0ad48a',
    borderLeftWidth: 10,
    justifyContent: 'center',
    opacity: 0.7,
    width: 330,
    height: 390,
    borderRadius:10,
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10
  },
  smallcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#161620',
    width: 250,
    height: 35,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    paddingLeft: -10,
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
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
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  input_info:{
    color: 'white',
    paddingLeft: 10,
    fontSize: 20,
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
  input1: {
    width: 140,
    fontSize: 15,
    height: 40,
    padding: 10,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    marginBottom: 7,
    marginRight: 7
  },
  input2: {
    width: 287,
    fontSize: 15,
    height: 40,
    padding: 10,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    marginBottom: 7,
    marginRight: 7
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: 350,
    margin: 20,
    backgroundColor: "#202030",
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  inline: {
    width: 250,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },

  textStyle: {
    fontSize: 18,
    color: 'white',
  },

  TextInputStyle: {  
    textAlign: 'center',
    width: 235,
    height: 35,
    borderRadius: 10,  
    borderWidth: 2,
    borderColor: '#161620',
    marginBottom: 10,
    color: 'white'
  },

  ImageIconStyle: {
    resizeMode: 'stretch',
  }

});

export default CarStatus;