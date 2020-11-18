import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native';

/**
 * Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" 
 * title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> 
 * www.flaticon.com</a>
 */

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
        <View>
          <Text style={[{color: 'white'}, {marginTop: 50}, {marginLeft: 50}, {fontWeight: 'bold'}, {fontSize: 25}]}>
              Which item needs a claim?
              </Text>
          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/car.png')}
            />
              <Text style={styles.listText}>Vehicle</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/house.png')}
            />
              <Text style={styles.listText}>Homeowner</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/scooter.png')}
            />
              <Text style={styles.listText}>Motorcycle</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/boat.png')}
            />
              <Text style={styles.listText}>Boat</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/caravan.png')}
            />
              <Text style={styles.listText}>Recreational Vehicle</Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/building.png')}
            />
              <Text style={styles.listText}>Commercial Property</Text>
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
    flexDirection: 'column',
    backgroundColor: '#1d1d2a',
    width: 415,
    height: 300,
    marginTop: 50,
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
  avatar: {
    width: 30,
    height: 30,
    // alignItems: 'center',
    marginLeft: 0,
    marginRight: 30,
    flex: 1,
    color: 'white'
  },
});

export default Appointment;