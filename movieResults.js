import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ImageBackground, Image, ScrollView, Row, TouchableHighlight } from 'react-native';
import netflixArray from './resources/webScraper.js';

const api_key = "7f66f00967ae0299408dd756de39b931";

export default class movieResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q: "a",
            display: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.newSearch = this.newSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        const { navigation } = this.props;
        this.state.q = navigation.getParam('search');

        this.newSearch();
    }

    newSearch() {
        let text = ""
        if (this.state.q) {
            text = this.state.q
        } else {
            text = "a"
        }

        fetch("https://api.themoviedb.org/3/search/movie?api_key=7f66f00967ae0299408dd756de39b931&query=" + text)
            .then((response) => {
                return response.json();

            })
            .then((myJson) => {

                let newState = []
                myJson.results.map((item) => {
                    newState.push(item)
                    item.imageUrl = "https://image.tmdb.org/t/p/w200" + item.poster_path
                    item.releaseDate = item.release_date.split("-")[0]

                    item.netflix = false;
                    item.hbo = false;
                    item.viaplay = false;

                    
                    const fakeHbo = [{title: "Zodiac"}, {title: "The Prestige"}, {title: "Prisoners"}, {title: "A Star Is Born"}, {title: "Game Of Thrones"}]
                    const fakeViaplay = [{title: "Zodiac"}, {title: "Star Wars"}]

                    netflixArray.map((movie) => {
                        if (movie.title === item.title) {
                            item.netflix = true;
                        }
                    });
                    fakeHbo.map((movie) => {
                        if (movie.title === item.title) {
                            item.hbo = true;
                        }
                    });
                    fakeViaplay.map((movie) => {
                        if (movie.title === item.title) {
                            item.viaplay = true;
                        }
                    });
                });
                this.setState({ display: newState })
            })
    }

    handleClick(item) {
        this.props.navigation.navigate('SinglePage', { item: item })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <TextInput ref={input => { this.textInput = input }} style={styles.mainInput} placeholder="Search for another movie..." onSubmitEditing={this.newSearch} onChangeText={(text) => this.setState({ q: text })}></TextInput>
                </View>
                <Text style={{ width: "100%", textAlign: "center", fontSize: 30, marginTop: 20 }}>
                    {this.state.display.length} Results Found
                </Text>

                {this.state.display.map((item, key) => {
                    return (
                        <View key={key} style={styles.singleMovieContainer}>
                            <TouchableHighlight onPress={() => this.handleClick(item)} underlayColor="white">
                                <Image style={styles.movieImage} source={{ uri: item.imageUrl }}></Image>
                            </TouchableHighlight>
                            <Text>{item.title}({item.releaseDate})</Text>
                            <View style={styles.iconContainer}>
                                {item.netflix === true ? <Image style={{ height: 24, width: 24, marginRight: 3 }} source={require('./assets/netflixicon.png')}></Image> : null}
                                {item.hbo === true ? <Image style={{ height: 24, width: 24, marginRight: 3 }} source={require('./assets/hbicon.png')}></Image> : null}
                                {item.viaplay === true ? <Image style={{ height: 24, width: 24, borderRadius: 3 }} source={require('./assets/viaplayicon.jpeg')}></Image> : null}
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    singleMovieContainer: {
        color: "red",
        width: "50%",
        alignItems: "center",
        marginTop: 20
    },
    movieImage: {
        width: 170,
        height: 250,
        marginBottom: 5,
    },
    mainInput: {
        width: "100%",
        borderStyle: "solid",
        borderColor: "rgba(230,230,230,0.8)",
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        paddingLeft: 15,
        fontSize: 22
    },
    iconContainer: {
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 5
    }
});