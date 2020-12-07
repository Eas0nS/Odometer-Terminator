import React from 'react';
import { StyleSheet, Text, Image, View, Button, ScrollView, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, TouchableHighlight } from 'react-native';

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
        state_name: '',
        zip: '',
        modalVisible: false,
        TextInputDisableStatus2: false,
        TextInputDisableStatus3: false,
        TextInputDisableStatus4: false,
        TextInputDisableStatus5: false,
        TextInputDisableStatus6: false,
        TextInputDisableStatus7: false,
        ButtonText2 : '>',
        ButtonText3 : '>',
        ButtonText4 : '>',
        ButtonText5 : '>',
        ButtonText6 : '>',
        ButtonText7 : '>',
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
                      city: responseJson.city,
                      state_name: responseJson.state,
                      zip: responseJson.zip});

      }).catch((error) => {
        console.error(error);

      });
  }
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  updatePersonalInfo() {
    
    const {id} = this.state;
    const {email} = this.state;
    const {phone} = this.state;
    const {address} = this.state;
    const {city} = this.state;
    const {state_name} = this.state;
    const {zip} = this.state;
  
    fetch('http://localhost:8080/odometer_terminator/user_personal_update.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          email: email,
          phone: phone,
          address: address,
          city: city,
          state: state_name,
          zip: zip,
        })
    }).then((response) => response.json())
        .then(() => {
        }).catch((error) => {
          console.error(error);
        });
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

  onPressButton6 = () => {  
    this.setState({ TextInputDisableStatus6: !this.state.TextInputDisableStatus6 });
    if (this.state.ButtonText6 == '>') {
      this.setState({ ButtonText6 : '✓' })
    } else {
      this.setState({ ButtonText6 : '>' })
    }
    this.updatePersonalInfo()
  }

  onPressButton7 = () => {  
    this.setState({ TextInputDisableStatus7: !this.state.TextInputDisableStatus7 });
    if (this.state.ButtonText7 == '>') {
      this.setState({ ButtonText7 : '✓' })
    } else {
      this.setState({ ButtonText7 : '>' })
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
       <ScrollView>
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
       
        <Text style={styles.titleText}>Personl Account</Text>

        <Text style={styles.username_info}>Username:</Text>
          <View style={[styles.username_container, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.UsernameInputStyle]}
              value = {this.state.username}
              onChangeText={(username) => this.setState({ username })}
            />
          </View>
        <View
          style={styles.container2}
          behavior="padding"
        >
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

          <Text style={styles.other_info}>State</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus6 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus6}
              value = {this.state.state_name}
              keyboardType = 'default'
              onChangeText={(state_name) => this.setState({ state_name })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton6}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText6} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Zip Code</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus7 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus7}
              value = {this.state.zip}
              keyboardType = 'default'
              onChangeText={(zip) => this.setState({ zip })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton7}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText7} </Text>
            </TouchableOpacity>
          </View>

        </View>
       </ScrollView>
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
    marginLeft: 140,
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
    height: 430,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 35,
    marginBottom: 15,
    paddingLeft: 10,
  },
  username_container: {
    alignItems: 'flex-end',
    width: 200,
    height: 15,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: -30,
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
  username_info:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  other_info:{
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
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
  UsernameInputStyle: {
    textAlign: 'right',
    width: 180,
    height: 55,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
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
    justifyContent: 'center',
    marginLeft: 100,
    marginTop: 30,
  },
  editbuttontext:{
    color: 'white',
    fontSize: 20,
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