import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';  

// export const rimage = {
//   imagefile
// }

class CameraPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      hasPermission: null,
      type: Camera.Constants.Type.back,
      imagefile: ''
    }
  }

  async componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  takePicture = async () => {
    
    // if (this.camera) {
    //   console.log('Taking photo');
    //   const options = { quality: 1, base64: true, fixOrientation: true, 
    //   exif: true};
    //   await this.camera.takePictureAsync(options).then(photo => {
    //     photo.exif.Orientation = 1;
    //     console.log(photo);
    //     console.log(photo.uri);
    //     this.setState({ image: photo.uri });
    //   });
    // }
    // if (this.camera) {
    //   let photo = await this.camera.takePictureAsync();
    // }
    const { uri } = await this.camera.takePictureAsync();
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log('Button Pressed');
    MediaLibrary.createAlbumAsync('Expo', asset)
      .then(() => {
        console.log('Album created!');
        console.log(uri);
        this.setState({ imagefile: uri });
        console.log('transferring');
        this.props.navigation.navigate('Appointment', {image: uri });
      })
      .catch(error => {
        console.log('err', error);
      });
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
  }

  render() {
    const { hasPermission, image } = this.state
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 8 }} ref={ (ref) => {this.camera = ref} } type={this.state.cameraType}>

          </Camera>
          <View style={{flex: 2, flexDirection:"row",alignItems: 'center',justifyContent:"space-between", backgroundColor: '#1d1d2a'}}>
            <TouchableOpacity
              style={{
                marginLeft: 20,
                backgroundColor: 'transparent',                  
            }}
            onPress={()=>this.props.navigation.navigate('Register2')}
            >
              <FontAwesome
                name="window-close"
                style={{ color: "#fff", fontSize: 40}}
              />
            </TouchableOpacity>

            <TouchableOpacity
            style={{
              backgroundColor: 'transparent',
            }}
            onPress={()=>this.takePicture()}>
              <FontAwesome
                name="camera"
                style={{ color: "#fff", fontSize: 40}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginRight: 20,
                backgroundColor: 'transparent',
            }}
            onPress={()=>this.pickImage()}>
              <Ionicons
                name="ios-photos"
                style={{ color: "#fff", fontSize: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
        
      );
    }
  }
}

export default CameraPage;

// export const rimage = {this.state.image};