import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';

class Personal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style= {styles.backgroundImage}
          source= {require('./assets/bg2.png')}
        />
        <View style={styles.top}>
          <Image
            style= {styles.avatar}
            source= {require('./assets/nan.jpg')}
          />
          <TouchableOpacity
              style={styles.topButton}
              onPress={() =>
                  this.props.navigation.navigate('Dashboard')}
            >
              <Text style={styles.topButtonText}> Change </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.middle}>
            <View style={styles.name}>
              <Text style={styles.listText}> Name </Text>
              <CustomButton text='Oliver' color='#FFFDD0' onPress={() =>
                    this.props.navigation.navigate('Dashboard')}/>
            </View>
            <View style={styles.gender}>
              <Text style={styles.listText}> Gender </Text>
              <CustomButton text='Female' color='#FFFDD0' onPress={() =>
                    this.props.navigation.navigate('Dashboard')}/>
            </View>
            <View style={styles.birthday}>
              <Text style={styles.listText}> Birthday </Text>
              <CustomButton text='Jan. 1st, 1998' color='#FFFDD0' onPress={() =>
                    this.props.navigation.navigate('Dashboard')}/>
            </View>
            <View style={styles.location}>
              <Text style={styles.listText}> Location </Text>
              <CustomButton text='201 N Charter St.' color='#FFFDD0' onPress={() =>
                    this.props.navigation.navigate('Dashboard')}/>
            </View>
            <View style={styles.user}>
              <Text style={styles.listText}> UserID </Text>
              <CustomButton text='95668234' color='#FFFDD0' onPress={() =>
                    this.props.navigation.navigate('Dashboard')}/>
            </View>
        </View>

        <View style={styles.bot}>
          <CustomButton text='Return' color='#FFFDD0' onPress={() =>
                    this.props.navigation.navigate('Dashboard')}/>
        </View>
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
    opacity: 0.8
  },
  avatar: {
    width: 140,
    height: 140,
    alignItems: 'center',
    marginLeft: 120,
    marginTop: 20,
    // flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    backgroundColor: 'skyblue',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 220,
    // flex: 5,
  },
  middle: {
    position: 'relative',
    backgroundColor: 'transparent',
    height: 400,
    marginTop: 50,
    alignSelf: 'center',
    width: '100%',
  },
  bot: {
    flex: 2.5,
    padding: 20,
    paddingLeft: 200,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fcfdff',
    // fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
  },
  listText: {
    flex: 1,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    padding: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 10,
  },
  name: {
    flex: 1,
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  gender: {
    flex: 1,
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  birthday: {
    flex: 1,
    // backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  location: {
    flex: 1,
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  user: {
    flex: 1,
    // backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    flex: 1.82,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: 200,
    height: 60,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 35, 
    marginRight: 5,
    marginTop: 5,
  },
  topButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A8FC8',
    borderColor: '#5A8FC8',
    width: 70,
    height: 30,
    padding: 6,
    borderWidth: 1,
    borderRadius: 7,
    marginLeft: 155, 
    marginTop: 10,
  },
  topButtonText:{
    fontSize: 12,
    color: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
  },
})

export default Personal;