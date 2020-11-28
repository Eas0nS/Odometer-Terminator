import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default class OCRPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
     image: {uri: null},
    }
  }

  getMileage = async() => {
    fetch('http://18.204.130.183:8000/mock', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        form: this.state.image,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        alert('Test:'+ JSON.stringify(responseJson));
        console.log(responseJson);
      })
      .catch((error) => {
        alert(JSON.stringify(this.state.image));
        console.error(error);
      });
  };
  
  render() {

    const { image } = this.state;
    
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
      
      if (!result.cancelled) {
        this.setState({ image: result });
      }
    };

    console.log(image)

    return (
    <View>
      <View style={[{marginTop: 15}]}>        
          <TouchableOpacity
            style={styles.filebutton}
            onPress={pickImage}>
            <Text style={styles.filetext}>Choose a file</Text>
          </TouchableOpacity>
      </View>

      <Image 
        source = {{
          uri: image.uri
        }}
        style = {{ width: 300, height: 300 }}
      />

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.ocrbutton}
          onPress={this.getMileage}>
            <Text style={styles.editbuttontext}>
              Submit
            </Text>
        </TouchableOpacity>

      </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  ocrbutton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 300,
    height: 50,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
  },

  editbuttontext:{
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filebutton: {
    width: 300,
    height: 120,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filetext: {
    fontSize: 20,
  }

}
)