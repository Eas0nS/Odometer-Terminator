import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

/**
 * Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" 
 * title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> 
 * www.flaticon.com</a>
 */

class Report3 extends React.Component {
    state = {
        phoneNum: '',
        description: '',
        email: '',
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
                    <Text style={[{ color: 'white' }, { marginTop: 50 }, { marginLeft: 20 }, { fontWeight: 'bold' }, { fontSize: 25 }]}>
                        When did the incident happen?
                    </Text>

                    <View style={styles.container2}>
                        <Text style={styles.subtitle}>Description</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Location'
                            placeholderTextColor='white'
                            onChangeText={(location) => this.setState({location})} />
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
                            this.props.navigation.navigate('')}
                    >
                            <Text style={[{color: 'white'}, {fontWeight: 'bold'}, {fontSize: '20'}, {marginRight: 10}]}> NEXT</Text>
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
    },
    container3: {
        flexDirection: 'column',
        backgroundColor: '#1d1d2a',
        width: 415,
        height: 200,
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
        marginTop: 30,
    }
});

export default Report3;