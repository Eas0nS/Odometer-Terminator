import React from 'react';
import { StyleSheet, Text, Image, View, Button, ScrollView, Alert, TouchableOpacity, TextInput, Modal} from 'react-native';

class InsurancePlan extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        id: this.props.route.params.id,
        city: '',
        state_name: 'Wisconsin',
        zip: '',
        brand: '',
        model: '',
        mileage: '',
        age: '',
        violations: '5 cases',
        credit_history: 'Overall Good',
        driving_record: '7 cases',
        maritial_status: '',
        gender: '',

        modalVisible: false,
        TextInputDisableStatus: false,
        TextInputDisableStatus2: false,
        TextInputDisableStatus3: false,
        TextInputDisableStatus4: false,
        TextInputDisableStatus5: false,
        TextInputDisableStatus6: false,
        TextInputDisableStatus7: false,
        TextInputDisableStatus8: false,
        TextInputDisableStatus9: false,
        TextInputDisableStatus10: false,
        ButtonText : '>',

        isModalVisible: false,
        isVisible: false,
        isVisible2: false,
        isVisible3: false,
        isVisible4: false,
        isVisible5: false,
        isVisible6: false,
        isVisible7: false,
        isVisible8: false,
        isVisible9: false,
        isVisible10: false,
        isVisible11: false,
        isVisible12: false,

     }
   }

  componentDidMount() {
    const { id } = this.state;
    fetch('http://localhost:8080/odometer_terminator/user_personal.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          city: responseJson.city,
          state_name: responseJson.state,
          zip: responseJson.zip,
          gender: responseJson.gender,
          age: responseJson.age,
          maritial_status: responseJson.maritial_status,
        });
      }).catch((error) => {
        console.error(error);
    });

    fetch('http://localhost:8080/odometer_terminator/user_carstatus.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: id,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          brand: responseJson.brand,
          model: responseJson.model,
          mileage: responseJson.mileage,
      });
    }).catch((error) => {
      console.error(error);
    });

  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  displayModal(show){
    this.setState({isVisible: show})
  }
  displayModal2(show){
    this.setState({isVisible2: show})
  }
  displayModal3(show){
    this.setState({isVisible3: show})
  }
  displayModal4(show){
    this.setState({isVisible4: show})
  }
  displayModal5(show){
    this.setState({isVisible5: show})
  }
  displayModal6(show){
    this.setState({isVisible6: show})
  }
  displayModal7(show){
    this.setState({isVisible7: show})
  }
  displayModal8(show){
    this.setState({isVisible8: show})
  }
  displayModal9(show){
    this.setState({isVisible9: show})
  }
  displayModal10(show){
    this.setState({isVisible10: show})
  }
  displayModal11(show){
    this.setState({isVisible11: show})
  }
  displayModal12(show){
    this.setState({isVisible12: show})
  }

  render() {
    const { modalVisible } = this.state;
    return (

      <View
        style={styles.container}
        behavior="padding"
      >

          <Image 
           style= {styles.backgroundImage}
           source= {require('./assets/newBG3.png')}
         />

      <ScrollView>
      <View style={styles.top}>
          <Image
            style= {styles.avatar}
            source= {require('./assets/logo.png')}
          />
      </View>

      <Text style={styles.titleText}>{'\n'}Insurance Plan</Text>

        <View
          style={styles.container2}
          behavior="padding"
        >
          <Text style={styles.other_info}>State Requirement</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus}
              value = {this.state.state_name}
              keyboardType = 'default'
              onChangeText={(state_name) => this.setState({ state_name })}
            />
            
            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible11}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/wisconsin.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Our records shows that your current billing location is in Madison WI.{'\n'} {'\n'} 
                  All Wisconsin drivers are required to carry automobile insurance or, in rare cases, 
                  some other form of financial security (surety bond, personal funds, certificate 
                  of self-insurance). Any car insurance policy must include at least the following 
                  minimum amounts of coverage: {'\n'} {'\n'}
                  {'\u2022 '}$25,000 liability coverage for bodily injury or death of one person in an accident 
                  caused by the owner/driver of the insured vehicle
                  {'\n'}{'\u2022 '} $50,000 liability coverage for total bodily injury or death liability in an accident 
                  caused by the owner/driver of the insured vehicle
                  {'\n'} ...</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal11(!this.state.isVisible11);}}>Close Modal</Text>
            </Modal>
          
            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal11(true);
              }}
            >
            <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.other_info}>Car Brand</Text>
        <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus2 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus2}
              value = {this.state.brand}
              keyboardType = 'default'
              onChangeText={(brand) => this.setState({ brand })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible10}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/civic.jpeg')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Honda Civic insurance facts: {'\n'}
                  {'\n'}{'\u2022 '}Average auto insurance price: $69/month {'\n'}
                  {'\n'}{'\u2022 '}Most affordable insurance company: Progressive ($34/month) {'\n'}
                  {'\n'}{'\u2022 '}Civic insurance rate vs. average vehicle insurance rate: $29 less expensive than the average vehicle {'\n'}
                  {'\n'} More info: {'\n'}https://www.thezebra.com/auto-insurance/vehicles/honda/civic/
              </Text>
              <Text
                style={styles.closeText}
                onPress={() => {
                  this.displayModal10(!this.state.isVisible10);}}>Close Modal</Text>
            </Modal>

            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal10(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>


          <Text style={styles.other_info}>Car Model</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus2 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus2}
              value = {this.state.model}
              keyboardType = 'default'
              onChangeText={(model) => this.setState({ model })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible12}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/civic.jpeg')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Honda Civic insurance facts: {'\n'}
                  {'\n'}{'\u2022 '}Average auto insurance price: $69/month {'\n'}
                  {'\n'}{'\u2022 '}Most affordable insurance company: Progressive ($34/month) {'\n'}
                  {'\n'}{'\u2022 '}Civic insurance rate vs. average vehicle insurance rate: $29 less expensive than the average vehicle {'\n'}
                  {'\n'} More info: {'\n'}https://www.thezebra.com/auto-insurance/vehicles/honda/civic/
              </Text>
              <Text
                style={styles.closeText}
                onPress={() => {
                  this.displayModal12(!this.state.isVisible12);}}>Close Modal</Text>
            </Modal>

            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal12(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>


        <Text style={styles.other_info}>Violations</Text>
        <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus3 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus3}
              value = {this.state.violations}
              keyboardType = 'default'
              onChangeText={(violations) => this.setState({ violations })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible9}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/building.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal9(!this.state.isVisible9);}}>Close Modal</Text>
            </Modal>

            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal9(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Mileage</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus4 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus4}
              value = {this.state.mileage}
              keyboardType = 'default'
              onChangeText={(mileage) => this.setState({ mileage })}
            />
            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible7}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/car.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal7(!this.state.isVisible7);}}>Close Modal</Text>
            </Modal>
            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal7(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Credit History</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus5 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus5}
              value = {this.state.credit_history}
              keyboardType = 'default'
              onChangeText={(credit_history) => this.setState({ credit_history })}
            />
            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible8}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/boat.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal8(!this.state.isVisible8);}}>Close Modal</Text>
            </Modal>
            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal8(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Driving Record</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus6 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus6}
              value = {this.state.driving_record}
              keyboardType = 'default'
              onChangeText={(driving_record) => this.setState({ driving_record })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible6}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/bg4.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal6(!this.state.isVisible6);}}>Close Modal</Text>
            </Modal>


            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal6(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>


          <Text style={styles.other_info}>Maritial Status</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus7 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus7}
              value = {this.state.maritial_status}
              keyboardType = 'default'
              onChangeText={(maritial_status) => this.setState({ maritial_status })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible5}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/bg3.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal5(!this.state.isVisible5);}}>Close Modal</Text>
            </Modal>

            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal5(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Age</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus8 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus8}
              value = {this.state.age}
              keyboardType = 'default'
              onChangeText={(age) => this.setState({ age })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible4}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/bg2.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal4(!this.state.isVisible4);}}>Close Modal</Text>
            </Modal>

            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal4(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.other_info}>Gender</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus9 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus9}
              value = {this.state.gender}
              keyboardType = 'default'
              onChangeText={(gender) => this.setState({ gender })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible3}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/bg.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal3(!this.state.isVisible3);}}>Close Modal</Text>
            </Modal>

            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal3(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>



          <Text style={styles.other_info}>Zip Code</Text>
          <View style={[styles.smallcontainer, {flexDirection: "row"}]}>
            <TextInput  
              style={[styles.TextInputStyle, { backgroundColor: this.state.TextInputDisableStatus10 ? 'grey' : '#161620' }]}
              editable={this.state.TextInputDisableStatus10}
              value = {this.state.zip}
              keyboardType = 'default'
              onChangeText={(zip) => this.setState({ zip })}
            />

            <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible2}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              source={require('./assets/zipcode.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Learning more about your local average car insurance rate: 
                  https://www.carinsurance.com/Articles/car-insurance-rate-comparison.aspx</Text>

              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal2(!this.state.isVisible2);}}>Close Modal</Text>
          </Modal>

            <TouchableOpacity
              style={styles.editbutton}
              onPress={() => {
                this.displayModal2(true);
              }}
            >
              <Text style={styles.editbuttontext}> {this.state.ButtonText} </Text>
            </TouchableOpacity>
          </View>


        </View>

        <Text style={styles.other_info}>Your Insurance Fee</Text>
        <View
          style={styles.container3}
          behavior="padding"
        >
        <Text style={styles.other_info2}>$1200.00</Text>
        </View>

        <Text style={styles.other_info}>Complete Report</Text>
        <View
          style={styles.container3}
          behavior="padding"
        >
        <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>
            <Image 
              source={require('./assets/logo.png')}
              style = { styles.image }/>
              <Text style = { styles.text }>
                  TBD</Text>
              <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal(!this.state.isVisible);}}>Close Modal</Text>
          </Modal>
            
          <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.displayModal(true);
              }}>
              <Text style={styles.buttonText}>View Complete Report</Text>
          </TouchableOpacity>   
        </View>
        
      </ScrollView>
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
    opacity: 1,
    width:"100%",
    height:"100%"
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161620',
  },
  container2: {
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    borderLeftColor: '#0ad48a',
    borderLeftWidth: 10,
    justifyContent: 'center',
    width: 330,
    height: 880,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 35,
    marginBottom: 15,
    paddingLeft: 15
  },
  container3: {
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    borderLeftColor: '#0ad48a',
    borderLeftWidth: 10,
    justifyContent: 'center',
    width: 330,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 35,
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 10
  },
  smallcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 35,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  editbutton: {
    alignItems: 'center',
    backgroundColor: '#242433',
    borderColor: '#242433',
    width: 75,
    height: 40,
    padding: 7,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: -80,
  },
  titleText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: -40,
    textAlign: 'left',
    marginBottom: 20,
    marginRight: 110
  },
  contact_info:{
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom: 5,
    fontFamily: 'Courier',
    fontWeight: 'bold',
    fontSize: 18,
  },
  other_info:{
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  other_info2:{
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 30,
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'Courier',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputStyle: {  
    textAlign: 'center',
    width: 235,
    height: 40,
    fontSize: 18,
    borderRadius: 10,  
    borderWidth: 2,
    borderColor: '#161620',
    marginBottom: 10,
    color: 'white'
  },
  avatar: {
    width: "60%",
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 80,
    marginTop: 20,
  },
  editbuttontext:{
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  editbutton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 40,
    height: 40,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 10,
    marginBottom: 10
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  image: {
    marginTop: 50,
    marginBottom: 10,
    width: '100%',
    height: 150,
  },
  text: {
    fontSize: 15,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }

});


export default InsurancePlan;