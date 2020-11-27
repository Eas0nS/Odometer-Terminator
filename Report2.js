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
        chosenTime: '21:33'
    }

    handlePickerDate = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY')
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
                <View>
                    <Text style={[{ color: 'white' }, { marginTop: 50 }, { marginLeft: 50 }, { fontWeight: 'bold' }, { fontSize: 25 }]}>
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
                            mode="date"
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

                    <Text style={[{ color: 'white' }, { marginTop: 50 }, { marginLeft: 50 }, { fontWeight: 'bold' }, { fontSize: 25 }]}>
                        Where did the incident happen?
            </Text>

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
        height: 300,
        marginTop: 50,
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
    },
    dateText: {
        color: 'white',
        fontSize: 18,
    },
    button: {
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
    },
});

export default Appointment;