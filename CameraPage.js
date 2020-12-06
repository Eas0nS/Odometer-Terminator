import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';  

class CameraPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      userID: this.props.route.params.userID,
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
    const { uri } = await this.camera.takePictureAsync();
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log('Button Pressed');
    MediaLibrary.createAlbumAsync('Expo', asset)
      .then(() => {
        console.log('Album created!');
        console.log(uri);
        this.setState({ imagefile: uri });
        this.props.navigation.navigate('EditPage', {userID: this.state.userID, image: uri });
      })
      .catch(error => {
        console.log('err', error);
      });
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.cancelled) {
      this.setState({ imagefile: result.uri });
      this.props.navigation.navigate('EditPage', {userID: this.state.userID, image: result.uri})
    }
  };

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
            onPress={()=>this.props.navigation.navigate('CarStatus')}
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