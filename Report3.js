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
            <Image 
                style= {styles.backgroundImage}
                source= {require('./assets/newBG3.png')}
            />
                <View>
                    <Text style={[{ color: 'white' }, { marginTop: 50 }, { marginLeft: 20 }, { fontWeight: 'bold' }, { fontSize: 25 }]}>
                        What happened?
                    </Text>

                    <View style={styles.container2}>
                        <Text style={styles.subtitle}>Description</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Brief Description'
                            placeholderTextColor='white'
                            onChangeText={(location) => this.setState({location})} />
                    </View>


                    <Text style={[{ color: 'white' }, { marginTop: 50 }, { marginLeft: 20 }, { fontWeight: 'bold' }, { fontSize: 25 }]}>
                            How can we reach you?
                    </Text>

                    <View style={styles.container3}>
                        <Text style={styles.subtitle}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Phone'
                            placeholderTextColor='white'
                            onChangeText={(location) => this.setState({location})} />
                        <Text style={styles.subtitle}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email(Optional)'
                            placeholderTextColor='white'
                            onChangeText={(location) => this.setState({location})} />
                    </View>
                    <TouchableOpacity
                            style={styles.next}
                            onPress={() =>
                            this.props.navigation.navigate('Report4')}
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

export default Report3;