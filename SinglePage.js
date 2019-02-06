import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ImageBackground, Image, ScrollView, Row } from 'react-native';

export default class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        let genres = JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}')
        const genresArray = genres.genres
        let hash = {}
        genresArray.map((genre) => {
            hash[genre.id] = genre.name;
        })
        this.hash = hash;

    }

    render() {
        const movie = this.props.navigation.getParam('item');

        let netflixrender = null
        let hborender = null
        let viaplayrender = null

        if (movie.netflix === true) {
            netflixrender =
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.imageIcon} source={require('./assets/netflixicon.png')}></Image>
                    <Text style={{ fontWeight: "bold" }}>Netflix</Text>
                </View>
        } else {
            netflixrender = null
        };

        if (movie.hbo === true) {
            hborender =
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.imageIcon} source={require('./assets/hbicon.png')}></Image>
                    <Text style={{ fontWeight: "bold" }}>HBO</Text>
                </View>
        } else {
            hborender = null
        };

        if (movie.viaplay === true) {
            viaplayrender =
                <View style={{ alignItems: "center" }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 6 }} source={require('./assets/viaplayicon.jpeg')}></Image>
                    <Text style={{ fontWeight: "bold" }}>Viaplay</Text>
                </View>
        } else {
            viaplayrender = null
        };
        return (
            <ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: 10 }}>
                <Image style={styles.movieImage} source={{ uri: movie.imageUrl }}></Image>
                <Text style={styles.movieTitle}>{movie.title}({movie.releaseDate || "unknown"})</Text>
                <Text style={styles.movieGenre}>({movie.genre_ids.map((genre) => { return this.hash[genre] }).join(", ") || "unknown"})</Text>
                <View style={styles.descriptionWrapper}>
                    <View style={{ alignItems: "center" }}>
                        <Image style={{ width: 34, height: 30 }} source={require('./assets/tmdbicon.png')}></Image>
                        <Text style={{ fontWeight: "bold" }}>{movie.vote_average}/10★</Text>
                        <Text>({movie.vote_count} votes)</Text>
                    </View>
                    <Text style={styles.movieOverview}>{movie.overview}</Text>
                </View>
                <View style={styles.iconWrapper}>

                    {netflixrender}

                    {hborender}

                    {viaplayrender}

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20
    },
    movieTitle: {
        fontSize: 35,
        textAlign: "center",
    },
    movieImage: {
        width: 270,
        height: 410,
    },
    movieGenre: {
        fontWeight: "bold",
        marginBottom: 10
    },
    imageIcon: {
        width: 60,
        height: 60,
    },
    iconWrapper: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
        marginTop: 10,
        borderTopColor: "rgba(200,200,200,0.5)",
        borderTopWidth: 1,
        paddingBottom: 40
    },
    movieOverview: {
        marginLeft: 10,
    },
    descriptionWrapper: { 
        flexDirection: "row", 
        marginLeft: 50, 
        marginRight: 50,
    }
});