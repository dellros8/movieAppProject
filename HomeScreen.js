import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ImageBackground, Image, SafeAreaView } from 'react-native';
require('./resources/webScraper.js');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.navigation.navigate('Results', { search: this.state.text })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require("./assets/movieBackground.png")} style={{ height: '100%' }}></Image>
                <TextInput ref={input => { this.textInput = input }} style={styles.mainInput} placeholder="Search for movie..." onSubmitEditing={this.handleSubmit} onChangeText={(text) => this.setState({ text: text })}></TextInput>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainInput: {
        position: "absolute",
        top: "50%",
        height: 70,
        width: 300,
        fontSize: 30,
        backgroundColor: "rgba(255,255,255,0.8)",
        paddingLeft: 15,
        borderRadius: 30
    }
});