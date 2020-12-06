import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity,
   TextInput, KeyboardAvoidingView, Modal, TouchableHighlight } from 'react-native';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';  

class CarStatus extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userID: this.props.route.params.id,
      brand: '',
      model: '',
      color: '',
      mileage: '',
      license_plate: '',
      modalVisible: false,
      TextInputDisableStatus: false,
      TextInputDisableStatus2: false,
      TextInputDisableStatus3: false,
      TextInputDisableStatus4: false,
      ButtonText: '>',
      ButtonText2: '>',
      ButtonText3: '>',
      ButtonText4: '>',
    };
  }
  
  componentDidMount() {

    this.getCarStatus();

  }

  getCarStatus() {

    const { userID } = this.state;
    
    fetch('http://localhost:8080/odometer_terminator/user_carstatus.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: userID,
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({brand: responseJson.brand,
                      model: responseJson.model,
                      color: responseJson.color,
                      mileage: responseJson.mileage});

      }).catch((error) => {
        console.error(error);
      });
  }

  updateCarStatus() {
    
    const {userID} = this.state;
    const {brand} = this.state;
    const {model} = this.state;
    const {color} = this.state;
  
    fetch('http://localhost:8080/odometer_terminator/user_carstatus_update.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: userID,
          brand: brand,
          model: model,
          color: color,
        })
    }).then((response) => response.json())
        .then(() => {
        }).catch((error) => {
          console.error(error);
        });
  }

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
    this.updateCarStatus();
  }

  onPressButton2 = () => {  
    this.setState({ TextInputDisableStatus2: !this.state.TextInputDisableStatus2 });
    if (this.state.ButtonText2 == '>') {
      this.setState({ ButtonText2 : '✓' })
    } else {
      this.setState({ ButtonText2 : '>' })
    }
    this.updateCarStatus();
  }

  onPressButton3 = () => {  
    this.setState({ TextInputDisableStatus3: !this.state.TextInputDisableStatus3 });
    if (this.state.ButtonText3 == '>') {
      this.setState({ ButtonText3 : '✓' })
    } else {
      this.setState({ ButtonText3 : '>' })
    }
    this.updateCarStatus();
  }

  onPressButton4 = () => {
    this.props.navigation.navigate('CameraPage', {userID: this.state.userID});
  }

  // Testing purpose only
  getDataUsingGet = () => {
    fetch('http://18.204.130.183:8000/health', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert('Your current insurance status: '+JSON.stringify(responseJson));
        console.log(responseJson);
      })
      .catch((error) => {
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
       <ScrollView>
        <KeyboardAvoidingView
          style={styles.container3}
          behavior="padding"
        >
          <Text style={styles.titleText}>Car Status</Text>
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
                      value = {this.state.brand}
                      keyboardType = 'default'
                      onChangeText={(brand) => this.setState({ brand })}
                      placeholder='Car Brand'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input1}
                    />
                    <TextInput
                      value = {this.state.color}
                      keyboardType = 'default'
                      width = {100}
                      onChangeText={(color) => this.setState({ color })}
                      placeholder='Car Color'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input1}
                    />
                  </KeyboardAvoidingView>
                  <KeyboardAvoidingView>
                    <TextInput
                      value = {this.state.model}
                      keyboardType = 'default'
                      onChangeText={(model) => this.setState({ model })}
                      placeholder='Car Model'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input2}
                    />
                    <TextInput
                      value = {this.state.mileage}
                      keyboardType = 'default'
                      onChangeText={(mileage) => this.setState({ mileage })}
                      placeholder='Oil Milage'
                      placeholderTextColor='white'
                      color='white'
                      style={styles.input2}
                    />
                    <TextInput
                      value = {this.state.license_plate}
                      keyboardType = 'default'
                      onChangeText={(license_plate) => this.setState({ license_plate })}
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
              value = {this.state.brand}
              keyboardType = 'default'
              onChangeText={(brand) => this.setState({ brand })}
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
              value = {this.state.model}
              keyboardType = 'default'
              onChangeText={(model) => this.setState({ model })}
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
              value = {this.state.color}
              keyboardType = 'default'
              onChangeText={(color) => this.setState({ color })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton3}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText3} </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other_info}>Oil Milage</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus4 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus4}
              value = {this.state.mileage}
              keyboardType = 'default'
              onChangeText={(mileage) => this.setState({ mileage })}
            />
            <TouchableOpacity
              style={styles.editbutton}
              onPress={this.onPressButton4}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText4} </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.other_info}>License Plate Number</Text>
          <View style={styles.smallcontainer}>
            <Text style={styles.input_info}>{this.state.license_plate}</Text>
          </View>
        </View>

        <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: 'transparent',                  
            }}
            onPress={() =>
              this.getCarStatus()}
        >
          <FontAwesome
            name="retweet"
            style={{ color: "#fff", fontSize: 80}}
          />
          <Text style={styles.refresh}>Refresh</Text>
        </TouchableOpacity>

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
  editbuttontext:{
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 250,
    height: 35,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    paddingLeft: -10,
  },
  titleText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 50,
    textAlign: 'left',
    marginBottom: 20,
    marginRight: 140
  },
  other_info:{
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  refresh:{
    color: 'white',
    fontWeight: 'bold',
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
    height: 35,
    fontSize: 18,
    borderRadius: 10,  
    borderWidth: 2,
    borderColor: '#161620',
    marginBottom: 10,
    color: 'white'
  },

});

export default CarStatus;