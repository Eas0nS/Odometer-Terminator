import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class Appointment extends React.Component {
  state = {
    email: '',
    subject: '',
    description: '',
    filePath: {}
  }

  render() {

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    return (
      <ScrollView
        style={styles.container}
      >
        <Image 
            style= {styles.backgroundImage}
            source= {require('./assets/newBG3.png')}
        />
        <View>
          <View style={styles.container2}>
            <Text style={styles.claim}>
                Need to report a claim?
            </Text>
            <Text style={styles.subtitle}>
                Accidents can be stressful, but filling your claim shouldn't be. Get started
                now and we'll guide you through the entire process.
            </Text>

            <TouchableOpacity
              style={styles.claimButton}
              onPress={() =>
                this.props.navigation.navigate('Report')}
            >
              <Text style={styles.claimButtonText}> REPORT A CLAIM </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.claimButton}
            >
              <Text style={styles.claimButtonText}> ACCIDENT CHECKLIST </Text>
            </TouchableOpacity>
          </View>
            
          <Text style={[{color: 'white'}, {marginTop: 50}, {marginLeft: 20}, {fontWeight: 'bold'}, {fontSize: 35}]}>CLAIMS TOOLS</Text>
          <View style={styles.container3}>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
              <Text style={styles.listText}>View Claim</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
              <Text style={styles.listText}>Find Auto Repair Shops</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
              <Text style={styles.listText}>Find Glass Repair Shops</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
              <Text style={styles.listText}>Call Roadside Assistance</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
              <Text style={styles.listText}>Claims FAQ</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161620'
  },
  container2: {
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    opacity: 0.9,
    width: 370,
    height: 290,
    borderRadius:10,
    borderWidth: 1,
    marginLeft: 25,
    marginTop: 30,
    opacity: 1
  },
  container3: {
    flexDirection: 'column',
    backgroundColor: '#1d1d2a',
    width: 415,
    height: 230,
    marginTop: 10,
    opacity: 1
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  list: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 15,
  },
  sideText: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
  },
  listText: {
    flex: 7,
    color: 'white',
    fontSize: 20,
  },
  claim: {
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 15,
  },
  claimButton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 300,
    height: 40,
    borderRadius: 5,
    marginTop: 25,
    marginLeft: 30 
  },
  claimButtonText: {
    color: 'white',
    fontWeight: 'bold', 
    fontSize: 25,
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 5,
  },
  input1: {
    width: 300,
    fontSize: 15,
    height: 35,
    borderRadius:7,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 15,
    padding: 5
  },
  input2: {
    width: 300,
    fontSize: 15,
    height: 120,
    borderRadius:7,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 15,
    padding: 5
  },
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width:"100%",
    height: 810
  },
});

export default Appointment;