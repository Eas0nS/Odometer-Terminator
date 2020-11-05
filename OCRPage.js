import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class OCRPage extends Component {
  render() {
    const myScript = 
      setTimeout(function() { window.alert('Please upload your odometer image here!') }, 500);
      true; 
    
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri:
              'http://18.204.130.183:8000/mock#',
          }}
        />
      </View>
    );
  }
}