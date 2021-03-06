import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

class EditPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userID: this.props.route.params.userID,
      image: this.props.route.params.image,
      mileage: ''
    }
  }

  getMileage = async() => {
    let file = {
      name: "img.jpg",
      uri: this.state.image,
      type: 'image/jpg'
    };
  
    let body_form = new FormData();
    body_form.append('image', file);

    fetch('http://18.204.130.183:8000/odometer', {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: body_form
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({ mileage: responseJson.mileage});
      })
      .catch((error) => {
        alert(JSON.stringify(this.state.image));
        console.error(error);
      });
  };

  storeMileage = async() => {
    const {userID} = this.state;
    const {mileage} = this.state;
  
    fetch('http://localhost:8080/odometer_terminator/store_mileage.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: userID,
          mileage: mileage,
        })
    }).then((response) => response.json())
        .then(() => {
        }).catch((error) => {
          console.error(error);
        });
  }

  onPressButton = () => {
    this.storeMileage()
    this.props.navigation.navigate('CarStatus')
  }

  render() {
    const { image,mileage } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Image 
           style= {styles.backgroundImage}
           source= {require('./assets/newBG3.png')}
         />
        <View>
          <Text style={styles.submit}>
          OCR
          </Text>
          <View style={styles.container3}>
            <Image 
              source = {{
                uri: image
              }}
              style = {{ width: 335, height: 295, marginLeft:1, borderRadius: 8}}
            />
          </View>

          <Text style={[{color: 'white'},{fontSize: 20},{marginLeft: 15},{marginTop: 20},{marginBottom: 5}]}>
            OCR Result:
          </Text>
          <View style={styles.container4}>
            <Text style={[{color: 'white'},{fontSize: 18},{paddingTop: 10}]}>
              {mileage}
            </Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.getMileage}
            >
              <Text style={[{color: 'white'},{fontSize: 25},{alignItems:'center'},{paddingTop: 5}]}> Submit </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressButton}
            >
              <Text style={[{color: 'white'},{fontSize: 25},{alignItems:'center'},{paddingTop: 5}]}> Back </Text>
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
  container3: {
    width: 340,
    height: 300,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    marginLeft: 15
  },
  container4: {
    width: 340,
    height: 50,
    backgroundColor:'#1d1d2a',
    borderColor: '#1d1d2a',
    borderRadius: 10,
    borderWidth: 2,
    marginLeft: 15,
    marginBottom: 30,
  },
  backgroundImage:{
    position: 'absolute',
    opacity: 1,
    width:"100%",
    height:"120%"
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
  button: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 330,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    marginLeft: 20
  },
});

export default EditPage;