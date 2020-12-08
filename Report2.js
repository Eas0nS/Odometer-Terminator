import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

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
        filePath: {},
        isVisible: false,
        isVisibleTime: false,
        chosenDate: 'November, 26th 2020',
        chosenTime: '21:33',
        location: ''
    }

    handlePickerDate = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY'),
            chosenTime: moment(datetime).format('HH:mm')
        })
    }

    showPickerDate = () => {
        this.setState({
            isVisible: true
        })
    }

    hidePickerDate = () => {
        this.setState({
            isVisible: false
        })
    }

    handlePickerTime = (datetime) => {
        this.setState({
            isVisibleTime: false,
            chosenTime: moment(datetime).format('HH:mm')
        })
    }

    showPickerTime = () => {
        this.setState({
            isVisibleTime: true
        })
    }

    hidePickerTime = () => {
        this.setState({
            isVisibleTime: false
        })
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
                    <Text style={[{ color: 'white' }, { marginTop: 50 }, { marginLeft: 20 }, { fontWeight: 'bold' }, { fontSize: 25 }]}>
                        When did the incident happen?
                    </Text>

                    <View style={styles.container2}>
                        <Text style={styles.subtitle}>Date</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.showPickerDate}
                        >
                            <Text style={styles.dateText}> {this.state.chosenDate} </Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={this.state.isVisible}
                            mode="datetime"
                            onConfirm={this.handlePickerDate}
                            onCancel={this.hidePickerDate}
                        />

                        <Text style={styles.subtitle}>Time</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.showPickerTime}
                        >
                            <Text style={styles.dateText}> {this.state.chosenTime} </Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisibleTime={this.state.isVisibleTime}
                            mode="time"
                            onConfirm={this.handlePickerTime}
                            onCancel={this.hidePickerTime}
                        />                        
                    </View>


                    <Text style={[{ color: 'white' }, { marginTop: 50 }, { marginLeft: 20 }, { fontWeight: 'bold' }, { fontSize: 25 }]}>
                            Where did the incident happen?
                    </Text>

                    <View style={styles.container3}>
                        <TextInput
                            style={styles.input}
                            placeholder='Location'
                            placeholderTextColor='white'
                            onChangeText={(location) => this.setState({location})} />
                        <Text style={[{ color: 'white'}, {marginTop: 20}, {marginLeft: 30}, {marginRight: 30}]}>
                            Please give us a brief description of the location. If you aren't sure of an actual address,
                            just mention the closest intersection or landmark.
                        </Text>
                    </View>
                    <TouchableOpacity
                            style={styles.next}
                            onPress={() =>
                            this.props.navigation.navigate('Report3')}
                    >
                            <Text style={[{color: 'white'}, {fontWeight: 'bold'}, {fontSize: 20}, {marginRight: 10}]}> NEXT</Text>
                    </TouchableOpacity>
                </View>
                <View>

                </View>

            </ScrollView>
        );
    };
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
        height: 180,
        marginTop: 50,
        opacity: 0.9
    },
    container3: {
        flexDirection: 'column',
        backgroundColor: '#1d1d2a',
        width: 415,
        height: 200,
        marginTop: 50,
        opacity: 0.9
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    sideText: {
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
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
        color: 'grey',
        fontSize: 18,
        marginLeft: 15,
        marginTop: 10,
        // marginBottom: 10,
    },
    dateText: {
        color: 'white',
        fontSize: 18,
        // marginLeft: 10,
    },
    button: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonText: {
        color: 'white',
    },
    input: {
        color: 'white',
        borderColor: 'white',
        padding: 8,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    next: {
        alignItems: 'center',
        backgroundColor: '#0ad48a',
        borderColor: '#0ad48a',
        width: 420,
        height: 50,
        paddingTop: 10,
        // marginLeft: 20,
        marginTop: 50,
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