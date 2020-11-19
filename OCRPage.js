import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default class OCRPage extends Component {
  
  
  
  getMileage = async() => {
    //GET request
    // call API --> object2
    fetch('http://18.204.130.183:8000/mock', {
      method: 'GET',
      //Request Type
    })
      // .then((response) =>  alert(response))
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert('Test:'+ JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };


  handlePress = async () => {
    fetch('http://18.204.130.183:8000/mock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        
      //   body: JSON.stringify({
      //       "type": "select",
      //   "args": {
      //     "table": "author",
      //     "columns": [
      //         "name"
      //     ],
      //     "limit": "1"
      // }
      //   })
  })
      .then((response) => response.json())
      .then((responseJson) => {
   Alert.alert("Author name at 0th index:  " + responseJson[0].height);
      })
      .catch((error) => {
        console.error(error);
      });
  }



  
  render() {
    const myScript = 
      setTimeout(function() { window.alert('Please upload your odometer image here!') }, 1000);
      true; 
    
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri:
            // call API --> object 1
              'http://18.204.130.183:8000/mock#',
          }}
        />

       <TouchableOpacity
            style={styles.ocrbutton}
            onPress={this.getMileage}>
            <Text style={styles.editbuttontext}>
              Test
            </Text>
          </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
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

  editbuttontext:{
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },


}
)