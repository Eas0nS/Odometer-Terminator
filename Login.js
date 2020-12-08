import React from 'react';
import { StyleSheet, Text, Image, Button, View, Alert, TouchableOpacity, TextInput, Dimensions, } from 'react-native';

class Login extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }
  userLogin = () =>{
 
    const { username }  = this.state ;
    const { password }  = this.state ;
    
    fetch('http://localhost:8080/odometer_terminator/user_login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        // If server response message same as Data Matched
        if(responseJson === 'Correct Username and Password') {
          this.props.navigation.navigate('Dashboard', 
            {username: username, password: password});
        } else{
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    return (

      <View style={styles.container}>
        <Image 
           style= {styles.backgroundImage}
           source= {require('./assets/newBG3.png')}
         />

        <Image
           style={{ width: "70%", height: 230, top:0, }}
           source={require('./assets/OD3.png')}
         />

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: "https://img.icons8.com/ios-glyphs/30/000000/name.png"}}/>
          <TextInput style={styles.inputs}
              keyboardType = 'default'
              onChangeText={(username) => this.setState({ username })}

              placeholder="username"
              // keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://img.icons8.com/ios-glyphs/30/000000/forgot-password.png'}}/>
          <TextInput style={styles.inputs}
              onChangeText={(password) => this.setState({ password })}
              placeholder="password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>
     

        <TouchableOpacity onPress={this.userLogin} style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register0')} style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
  
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
    height:"100%"
  },
  container: {
    flex: 1,
    fontFamily: 'Arial',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'Arial',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontFamily: 'Arial',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom:10,
    top: -60,
    backgroundColor: "gray",
    opacity:0.9
  },
  /// 
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  input2: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },

  logo:{
    fontFamily: 'Arial',
    fontWeight:"bold",
    fontSize:20,
    color:"white",
    // marginBottom:20
    top: -100,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }, 
  
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
    
  });

export default Login;