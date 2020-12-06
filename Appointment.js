import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class Appointment extends React.Component {
  state = {
    email: '',
    subject: '',
    description: '',
    filePath: {},
    imagefile: ''
  }

  render() {
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ imagefile: result.uri });
      }
    };

    return (
      <ScrollView
        style={styles.container}
      >
        <View>
          <Text style={styles.submit}>
            Submit a request
          </Text>
          <View style={styles.container2}>
            <View style={[{flexDirection: "row"}]}>
              <Text style={styles.subtitle}>
                Your email address
              </Text>
              <Text style={[{color: "red"},{fontWeight: 'bold'},{marginTop: 15}]}>
                *
              </Text>
            </View>
            <View>
              <TextInput
                value = {this.state.email}
                keyboardType = 'default'
                onChangeText={(email) => this.setState({ email })}
                style={styles.input1}
              />
            </View>
            <View style={[{flexDirection: "row"}]}>
              <Text style={styles.subtitle}>
                Subject
              </Text>
              <Text style={[{color: "red"},{fontWeight: 'bold'},{marginTop: 15}]}>
                *
              </Text>
            </View>
            <View>
              <TextInput
                value = {this.state.subject}
                keyboardType = 'default'
                onChangeText={(subject) => this.setState({ subject })}
                style={styles.input1}
              />
            </View>
            <View style={[{flexDirection: "row"}]}>
              <Text style={styles.subtitle}>
                Description
              </Text>
              <Text style={[{color: "red"},{fontWeight: 'bold'},{marginTop: 15}]}>
                *
              </Text>
            </View>
            <View>
              <TextInput
                value = {this.state.description}
                keyboardType = 'default'
                onChangeText={(description) => this.setState({ description })}
                style={styles.input2}
              />
            </View>
            <View>
              <Text style={[{color: "white"},{marginLeft: 22}]}>
                Please describe the details of your question. A member of our support team will reach out to you as soon as possible.
              </Text>
            </View>
            <View style={[{marginTop: 15}]}>
              <Text style={styles.subtitle}>
                Attachments
              </Text>
              <TouchableOpacity
                style={styles.filebutton}
                onPress={pickImage}
              >
                <Text style={styles.filetext}>Choose a file</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.submitbutton}
              onPress={() =>
                this.props.navigation.navigate('Register2')}
            >
              <Text style={[{color: 'white'},{fontSize: 25},{alignItems:'center'},{paddingTop: 5}]}> Submit </Text>
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
    width: 340,
    height: 680,
    borderRadius:10,
    borderWidth: 1,
    marginLeft: 15
  },
  submit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 25
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 15
  },
  submitbutton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 330,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 20
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
  filebutton: {
    width: 300,
    height: 120,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filetext: {
    color: '#0ad48a',
    fontSize: 20,
  }
});

export default Appointment;