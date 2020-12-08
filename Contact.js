import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, TouchableHighlight } from 'react-native';

class Contact extends React.Component {
  state = {
    agent: '',
    phone: '',
    feedback: '',
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

  onPressButton1 = () => {  
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

  render() {
    const { modalVisible } = this.state;
    return (
      <View
        style={styles.container}
        behavior="padding"
      >

        <Image 
            style= {styles.backgroundImage}
            source= {require('./assets/newBG3.png')}
        />

        <KeyboardAvoidingView
          style={styles.container1}
          behavior="padding"
        >
          <Text style={styles.titleText}>Contact us</Text>
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
                      value = {this.state.agent}
                      keyboardType = 'default'
                      onChangeText={(agent) => this.setState({ agent })}
                      placeholder='Car Brand'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input1}
                    />
                    <TextInput
                      value = {this.state.feedback}
                      keyboardType = 'default'
                      width = {100}
                      onChangeText={(feedback) => this.setState({ feedback })}
                      placeholder='Car Color'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input1}
                    />
                  </KeyboardAvoidingView>
                  <KeyboardAvoidingView>
                    <TextInput
                      value = {this.state.phone}
                      keyboardType = 'default'
                      onChangeText={(phone) => this.setState({ phone })}
                      placeholder='Car Model'
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
            
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>

        <View
          style={styles.container2}
          behavior="padding"
        >
          <Text style={styles.contactText}>If you need any help, don't hesitate to contact us 
          using this form or email us at{"\n"} 123@gmail.com{"\n"} 
          Please include the issue you encountered. </Text>
        </View>
        <TouchableHighlight
              style={styles.emailButton}
              onPress={() => {
                this.props.navigation.navigate('Appointment')}}
              >
                <Text style={styles.editbuttontext}> Email us </Text>
          </TouchableHighlight>
        
        <View
          style={styles.container3}
          behavior="padding"
        >
          <Text style={styles.other_info}>Find an Agent</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus}
              value = {this.state.agent}
              keyboardType = 'default'
              onChangeText={(agent) => this.setState({ agent })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton1}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other_info}>Phone call</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus2 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus2}
              value = {this.state.phone}
              keyboardType = 'default'
              onChangeText={(phone) => this.setState({ phone })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton2}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText2} </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other_info}>App Feedback</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus3 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus3}
              value = {this.state.feedback}
              keyboardType = 'default'
              onChangeText={(feedback) => this.setState({ feedback })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton3}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText3} </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    width:"100%",
    height:"100%"
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161620'
  },
  editbuttontext:{
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailButton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 320,
    height: 50,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 30,
    marginTop: -10,
    marginRight: 0,
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
    opacity: 0.9,
    width: 330,
    height: 120,
    borderRadius:10,
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  container3: {
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    borderLeftColor: '#0ad48a',
    borderLeftWidth: 10,
    justifyContent: 'center',
    opacity: 0.9,
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
    width: 250,
    height: 35,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    paddingLeft: -10,
  },
  contactText:{
    color: 'white'
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
  inline: {
    width: 250,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
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

});

export default Contact;