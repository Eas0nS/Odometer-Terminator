import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, TouchableHighlight } from 'react-native';

class Personal extends React.Component {

   constructor(props) {
     super(props)
     this.state = {
        username: this.props.route.params.username,
        phone: '',
        email: '',
        address: '',
        userID:'',
        modalVisible: false
     }
   }
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
        <View style={styles.top}>
          <Image
            style= {styles.avatar}
            source= {require('./assets/nan.jpg')}
          />
          <TouchableOpacity
              style={styles.changeButton}
              onPress={() =>
                  this.props.navigation.navigate('Dashboard')}
            >
              <Text style={styles.changeButtonText}>Change </Text>
            </TouchableOpacity>
        </View>
          
        <KeyboardAvoidingView
          style={styles.container3}
          behavior="padding"
        >
          <Text style={styles.titleText}>Personl Account</Text>
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
                      value = {this.state.username}
                      keyboardType = 'default'
                      onChangeText={(username) => this.setState({ username })}
                      placeholder='Username'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input1}
                    />
                    <TextInput
                      value = {this.state.email}
                      keyboardType = 'default'
                      width = {100}
                      onChangeText={(email) => this.setState({ email })}
                      placeholder='Email'
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
                      placeholder='Phone'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input2}
                    />
                    <TextInput
                      value = {this.state.address}
                      keyboardType = 'default'
                      onChangeText={(address) => this.setState({ address })}
                      placeholder='Address'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input2}
                    />
                    <TextInput
                      value = {this.state.userID}
                      keyboardType = 'default'
                      onChangeText={(userID) => this.setState({ userID })}
                      placeholder='UserID'
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
              style={styles.editbutton}
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
          <Text style={styles.other_info}>Username</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info} text={this.state.username}>{this.state.username}</Text>
          </View>
          <Text style={styles.other_info}>Email</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info}>{this.state.email}</Text>
          </View>
          <Text style={styles.other_info}>Phone</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info}>{this.state.phone}</Text>
          </View>
          <Text style={styles.other_info}>Address</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info}>{this.state.address}</Text>
          </View>
          <Text style={styles.other_info}>UserID</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info}>{this.state.userID}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.ocrbutton}
            onPress={() =>
              this.props.navigation.navigate('Register2')}
          >
            <Text style={styles.editbuttontext}> Return </Text>
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
  editbutton: {
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
  changeButtonText:{
    color: 'black',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeButton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#242433',
    width: 65,
    height: 30,
    padding: 7,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    marginLeft: 35,
    marginTop: 10,
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
    marginBottom: 30,
    marginTop: 0,
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
    backgroundColor: '#161620',
    width: 250,
    height: 35,
    marginLeft: 20,
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
    //fontWeight: 'bold',
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

  avatar: {
    width: 140,
    height: 140,
    alignItems: 'center',
    marginLeft: 0,
    // marginBottom: 50,
    marginTop: 10,
    // flex: 1,
  },

});

export default Personal;