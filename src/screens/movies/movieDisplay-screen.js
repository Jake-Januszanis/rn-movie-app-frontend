import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, StatusBar, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import ReadMoreBtn from '../../components/readMoreBtn';

import NextBtn from '../../components/nextBtn';
import PreviousBtn from '../../components/previousBtn';
import { LinearGradient } from 'expo-linear-gradient';

export default function MovieDisplay({navigation, route}) {

    const [state, setState] = useState(0);
    const [linesOfText, setLinesOfText] = useState(3)
    // const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(true)

    // useEffect(() => {
    //     getMovieData()
    // }, [])


    // const getMovieData = async() => {
    //     const url = `https://fetch-movie-server.herokuapp.com/search/${route.params.genres}/${route.params.providers}`
    //     try {
    //         const response = await fetch(url)
    //         const json = await response.json();
    //         setData(json)
    //         setIsLoaded(!isLoaded)

    //     } catch (error) {
    //         console.log(error)
    //     }}

    const data = {
        "page": 1,
        "results": [
        {
        "adult": false,
        "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
        "genre_ids": [
          28,
          878,
          12,
        ],
        "id": 588228,
        "original_language": "en",
        "original_title": "The Tomorrow War",
        "overview": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
        "popularity": 1372.651,
        "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
        "release_date": "2021-06-30",
        "title": "The Tomorrow War",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 3715,
      },
      {
        "adult": false,
        "backdrop_path": "/7SYNEG50fKODsTP6h9phYM3BueV.jpg",
        "genre_ids": [
          37,
          12,
          28,
        ],
        "id": 995,
        "original_language": "en",
        "original_title": "Stagecoach",
        "overview": "A group of people traveling on a stagecoach find their journey complicated by the threat of Geronimo, and learn something about each other in the process.",
        "popularity": 11.378,
        "poster_path": "/b4RUzWOalyPbUu66TT147b5iR0M.jpg",
        "release_date": "1939-03-03",
        "title": "Stagecoach",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 738,
      }
        ]}

        const genresData = [
            {type: 'Action', id: 28},
            {type: 'Adventure', id: 12},
            {type: 'Anime', id: 16},
            {type: 'Crime', id: 80},
            {type: 'Comedy', id: 35},
            {type: 'Documentary', id: 99},
            {type: 'Drama', id: 19},
            {type: 'Fantasy', id: 14},
            {type: 'Horror', id: 27},
            {type: 'Romance', id: 10749},
            {type: 'Sci-Fi', id: 878},
            {type: 'Stand Up', id: 10402},
            {type: 'Western', id: 37},
        ]

    return (
        (isLoaded !== true)
        ?
        <Text>Loading Please Wait</Text>
        :
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={{flexGrow: 1}}>
                    <Image
                        source={{uri: `https://image.tmdb.org/t/p/original${data.results[state].poster_path}`}}
                        style={styles.mainImage}
                        resizeMode='cover'
                    />
                        <LinearGradient
                            colors={['#0f0c29', '#302b63', '#24243e']}>

                            <View style={styles.bottomContainer}>

                                <View style={{...styles.subContainers, justifyContent: 'space-between'}}>
                                    <PreviousBtn state={state} setState={setState}/>
                                    <NextBtn state={state} setState={setState}/>
                                </View>

                                <View>
                                    <Text style={styles.largeText}>{data.results[state].title}</Text>
                                    <LinearGradient
                                        colors={['#8A2387', '#E94057', '#F27121' ]}
                                        style={styles.yearBubble}>
                                        <Text style={styles.mediumText}>
                                            {data.results[state].release_date.slice(0,4)}
                                        </Text>
                                    </LinearGradient>
                                </View>

                                <View style={styles.subContainers}>
                                    {data.results[state].genre_ids.splice(0,3).map((item, index) => {
                                        const genre = genresData.find(obj => obj.id === item);
                                        return <Text key={index} style={styles.genres}>
                                                    {genre.type}
                                                </Text>
                                    })}
                                </View>

                                <View style={styles.subContainers}>
                                    <AntDesign 
                                        name='star'
                                        size={30} 
                                        color='#FFD200'
                                        style={{paddingRight: 5, paddingTop: 5}}/>
                                    <Text
                                        style={styles.rating}>
                                        {data.results[state].vote_average}
                                    </Text>
                                </View>

                                <View>
                                    <Text style={{...styles.mediumText, textAlign: 'left'}}>Plot:</Text>
                                    <Text 
                                        numberOfLines={linesOfText}
                                        style={styles.descriptionText}>
                                        {data.results[state].overview}
                                    </Text>
                                    <ReadMoreBtn linesOfText={linesOfText} setLinesOfText={setLinesOfText} />
                                </View>

                            </View>
                        </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        backgroundColor: '#070d2d',
    },
    mainImage: {
        height: 450,
    },
    bottomContainer: {
        marginHorizontal: 15,
        paddingBottom: 20
    },
    subContainers: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,

    },
    largeText: {
        fontSize: 38,
        color: '#fff'
    },
    mediumText: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },

    yearBubble: {
        borderRadius: 20,
        marginVertical: 3,
        paddingVertical: 2,
        width: 90
    },
    descriptionText: {
        fontSize: 15,
        color: '#fff',
    },
    genres: {
        color: '#F27121',
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 8,
        marginHorizontal: 6,
        marginTop: 8,
        borderWidth: 1,
        borderColor: '#E94057',
        borderRadius: 5
    },
    rating: {
        color: '#fff',
        fontSize: 30,
    },
})

