import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';

class Dashboard extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Image 
            style= {styles.backgroundImage}
            source= {require('./assets/bg2.png')}
        />
        <View style ={styles.middle}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('Personal')}
        >
        <Text style={styles.buttonText}> Personal Account </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
             this.props.navigation.navigate('CarStatus')}
        >
        <Text style={styles.buttonText}> Car Status </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
             this.props.navigation.navigate('InsurrancePlan')}
        >
        <Text style={styles.buttonText}> Insurance Plan </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
             this.props.navigation.navigate('Appointment')}
        >
        <Text style={styles.buttonText}> Schedule Appointment </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
             this.props.navigation.navigate('ReportAccident')}
        >
        <Text style={styles.buttonText}> Report Accident </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.button_bot}
          onPress={() =>
             this.props.navigation.navigate('Login')}
        >
        <Text style={styles.buttonText}> Logout </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_contact}
          onPress={() =>
             this.props.navigation.navigate('Contact')}
        >
        <Text style={styles.buttonText}> Contact Us </Text>
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
    opacity: 0.8
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
  },
  buttonText:{
    fontFamily: 'Courier',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 60,
  },
  middle:{
    flex: 2,
  },
});

export default Dashboard;