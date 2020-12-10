import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

/**
 * Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" 
 * title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> 
 * www.flaticon.com</a>
 */

class Report extends React.Component {

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
          <Text style={[{color: 'white'}, {marginTop: 50}, {marginLeft: 50}, {fontWeight: 'bold'}, {fontSize: 25}]}>
              Which item needs a claim?
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
              <Text style={styles.listText}>Vehicle</Text>
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
              <Text style={styles.listText}>Homeowner</Text>
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
              <Text style={styles.listText}>Motorcycle</Text>
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
              <Text style={styles.listText}>Boat</Text>
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
              <Text style={styles.listText}>Recreational Vehicle</Text>
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
    height: 300,
    marginTop: 50,
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
});

export default Report;