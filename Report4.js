import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

/**
 * Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" 
 * title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> 
 * www.flaticon.com</a>
 */

class Report4 extends React.Component {
  state = {
    email: '',
    subject: '',
    description: '',
    filePath: {}
  };

 showAlert = () =>{
    Alert.alert(
        "Submitted!", "Type OK to return"
        [{text: "OK"}],
      );
    this.props.navigation.navigate('Dashboard')
 };

  render() {
    return (
      <ScrollView
        style={styles.container}
      >
        <Image 
            style= {styles.backgroundImage}
            source= {require('./assets/newBG3.png')}
        />
        <View>
          <Text style={[{color: 'white'}, {marginTop: 50}, {marginLeft: 60}, {fontWeight: 'bold'}, {fontSize: 25}]}>
              Review Your Information
              </Text>
          <Text style={[{color: 'white'}, {marginTop: 20}, {marginLeft: 20}, {fontSize: 15}]}>
              Does everything look correct? You can make changes below, if needed.
              </Text>
          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('Report2')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/car.png')}
            />
              <Text style={styles.listText}>NAME</Text>
              <Text style={styles.content}> Ron Yang </Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('Report2')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/house.png')}
            />
              <Text style={styles.listText}>LOSS TYPE</Text>
              <Text style={styles.content}> Vehicle </Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('Report2')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/scooter.png')}
            />
              <Text style={styles.listText}>VEHICLE TYPE</Text>
              <Text style={styles.content}> Ford </Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('Report2')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/boat.png')}
            />
              <Text style={styles.listText}>WHEN</Text>
              <Text style={styles.content}> Nov. 1st, 2020 </Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('Report2')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/caravan.png')}
            />
              <Text style={styles.listText}>WHERE</Text>
              <Text style={styles.content}> 305 N Frances </Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('Report2')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/building.png')}
            />
              <Text style={styles.listText}>DESCRIPTION</Text>
              <Text style={styles.content}> The ... </Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                this.props.navigation.navigate('Report2')}
            >
            <Image
                style= {styles.avatar}
                source= {require('./assets/building.png')}
            />
              <Text style={styles.listText}>CONTACT</Text>
              <Text style={styles.content}> 6089991111 </Text>
              <Text style={styles.sideText}> &#9654; </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.next}
              onPress={() => this.showAlert(this.props.navigation)}
            >
              <Text style={[{color: 'white'}, {fontWeight: 'bold'}, {fontSize: '20'}, {marginRight: 10}]}> SUBMIT CLAIM</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
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
    width: '100%',
    height: 810
  },
  container: {
    flex: 1,
    backgroundColor: '#161620'
  },
  container2: {
    flexDirection: 'column',
    backgroundColor: '#1d1d2a',
    width: 415,
    height: 370,
    marginTop: 20,
    opacity: 0.9
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
    marginLeft: 5,
  },
  content: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 5,
    fontSize: 15,
  },
  listText: {
    flex: 7,
    color: 'white',
    fontSize: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 0,
    marginRight: 30,
    flex: 1,
    color: 'white'
  },
  next: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 420,
    height: 50,
    paddingTop: 10,
    marginTop: 70,
  },
});

export default Report4;