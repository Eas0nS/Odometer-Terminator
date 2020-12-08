import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import { getAppLoadingLifecycleEmitter } from 'expo/build/launch/AppLoading';

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      username: this.props.route.params.username,
      password: this.props.route.params.password,
    }
  }

  componentDidMount() {
    // componentDidMount runs immediately after
    // redirected to this Dashboard page

    this.getUserID();

  }

  getUserID() {
    // IMPORTANT
    // Gets the userID from username
    // The userID is further passed into pages
    // like Personal Account, Car Status...

    const { username } = this.state;
    
    fetch('http://localhost:8080/odometer_terminator/user_dashboard.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
          this.setState({id: responseJson.id});
      }).catch((error) => {
        console.error(error);
      });

  }

  insertCarRecord() {
    // Insert a new car record into table Car
    // with the corresponding userID

    const { id } = this.state;

    fetch('http://localhost:8080/odometer_terminator/user_dashboard_car.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: id,
      })
    }).then((response) => response.json())
      .then(() => {
      }).catch((error) => {
        console.error(error);
      });

  }

  render() {
    this.insertCarRecord();
    return (
      <View style={styles.container}>
        <Image 
            style= {styles.backgroundImage}
            source= {require('./assets/newBG3.png')}
        />
        <View style ={styles.middle}>
        <Image
          style={styles.logo}
          source={require('./assets/OD3.png')}
        />
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            const{ id } = this.state;
            this.props.navigation.navigate('Personal', {id:id});
          }}
        >
        <Text style={styles.loginText}> Personal Account </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            const{ id } = this.state;
            this.props.navigation.navigate('CarStatus', {id:id});
          }}
        >
        <Text style={styles.loginText}> Car Status </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            const{ id } = this.state;
             this.props.navigation.navigate('InsurancePlan', {id:id})}}
        >
        <Text style={styles.loginText}> Insurance Plan </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() =>
             this.props.navigation.navigate('Appointment')}
        >
        <Text style={styles.loginText}> Schedule Appointment </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() =>
             this.props.navigation.navigate('Claim')}
        >
        <Text style={styles.loginText}> Report Accident </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity
          style={styles.button_bot}
          onPress={() =>
             this.props.navigation.navigate('Login')}
        >
        <Text style={styles.loginText}> Logout </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_contact}
          onPress={() =>
             this.props.navigation.navigate('Contact')}
        >
        <Text style={styles.loginText}> Contact us </Text>
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
    opacity: 0.8,
    width:"100%",
    height: 810
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'Courier',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  middle:{
    flex: 2,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'white',
  },
  loginButton: {
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  loginText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button_bot: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 15,
    marginTop: 100,
    borderRadius:30,
    backgroundColor: '#3498db',
  },
  button_contact: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 150,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 35, 
    marginRight: 5,
    marginTop: 100,
    borderRadius:30,
    backgroundColor: '#3498db',
  },

});

export default Dashboard;