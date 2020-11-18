import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, TouchableHighlight } from 'react-native';

class Personal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        id: this.props.route.params.id,
        username: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        modalVisible: false,
        TextInputDisableStatus: false,
        TextInputDisableStatus2: false,
        TextInputDisableStatus3: false,
        TextInputDisableStatus4: false,
        TextInputDisableStatus5: false,
        ButtonText : '>',
        ButtonText2 : '>',
        ButtonText3 : '>',
        ButtonText4 : '>',
        ButtonText5 : '>'
     }
   }

  componentDidMount() {
 
    const { id } = this.state;
    
    fetch('http://localhost:8080/odometer_terminator/user_personal.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({username: responseJson.username,
                      email: responseJson.email,
                      phone: responseJson.phone,
                      address: responseJson.address,
                      city: responseJson.city});

      }).catch((error) => {
        console.error(error);

      });
  }
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  updatePersonalInfo() {
    
    const {id} = this.state;
    const {username} = this.state;
    const {email} = this.state;
    const {phone} = this.state;
    const {address} = this.state;
    const {city} = this.state;
  
    fetch('http://localhost:8080/odometer_terminator/user_personal_update.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          username: username, 
          email: email,
          phone: phone,
          address: address,
          city: city,
        })
    }).then((response) => response.json())
        .then(() => {
        }).catch((error) => {
          console.error(error);
        });
  }

  onPressButton1 = () => {  
    this.setState({ TextInputDisableStatus: !this.state.TextInputDisableStatus });
    if (this.state.ButtonText == '>') {
      this.setState({ ButtonText : '✓' })
    } else {
      this.setState({ ButtonText : '>' })
    }
    this.updatePersonalInfo()
  }

  onPressButton2 = () => {  
    this.setState({ TextInputDisableStatus2: !this.state.TextInputDisableStatus2 });
    if (this.state.ButtonText2 == '>') {
      this.setState({ ButtonText2 : '✓' })
    } else {
      this.setState({ ButtonText2 : '>' })
    }
    this.updatePersonalInfo()
  }

  onPressButton3 = () => {  
    this.setState({ TextInputDisableStatus3: !this.state.TextInputDisableStatus3 });
    if (this.state.ButtonText3 == '>') {
      this.setState({ ButtonText3 : '✓' })
    } else {
      this.setState({ ButtonText3 : '>' })
    }
    this.updatePersonalInfo()
  }

  onPressButton4 = () => {  
    this.setState({ TextInputDisableStatus4: !this.state.TextInputDisableStatus4 });
    if (this.state.ButtonText4 == '>') {
      this.setState({ ButtonText4 : '✓' })
    } else {
      this.setState({ ButtonText4 : '>' })
    }
    this.updatePersonalInfo()
  }

  onPressButton5 = () => {  
    this.setState({ TextInputDisableStatus5: !this.state.TextInputDisableStatus5 });
    if (this.state.ButtonText5 == '>') {
      this.setState({ ButtonText5 : '✓' })
    } else {
      this.setState({ ButtonText5 : '>' })
    }
    this.updatePersonalInfo()
  }

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
                      value = {this.state.city}
                      keyboardType = 'default'
                      onChangeText={(city) => this.setState({ city })}
                      placeholder='City'
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
          <Text style={styles.other_info}>Username</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus}
              value = {this.state.username}
              keyboardType = 'default'
              onChangeText={(username) => this.setState({ username })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton1}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Email</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus2 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus2}
              value = {this.state.email}
              keyboardType = 'default'
              onChangeText={(email) => this.setState({ email })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton2}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText2} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Phone</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus3 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus3}
              value = {this.state.phone}
              keyboardType = 'default'
              onChangeText={(phone) => this.setState({ phone })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton3}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText3} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Address</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus4 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus4}
              value = {this.state.address}
              keyboardType = 'default'
              onChangeText={(address) => this.setState({ address })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton4}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText4} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>City</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus5 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus5}
              value = {this.state.city}
              keyboardType = 'default'
              onChangeText={(city) => this.setState({ city })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton5}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText5} </Text>
            </TouchableOpacity>
          </View>
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
  container2: {
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    borderLeftColor: '#0ad48a',
    borderLeftWidth: 10,
    justifyContent: 'center',
    opacity: 0.8,
    width: 330,
    height: 410,
    borderRadius: 10,
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
    fontWeight: 'bold',
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
  TextInputStyle: {  
    textAlign: 'center',
    width: 235,
    height: 40,
    fontSize: 18,
    borderRadius: 10,  
    borderWidth: 2,
    borderColor: '#161620',
    marginBottom: 10,
    color: 'white'
  },
  avatar: {
    width: 140,
    height: 140,
    alignItems: 'center',
    marginLeft: 0,
    marginTop: 10,
  },
  editbuttontext:{
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
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

});

export default Personal;