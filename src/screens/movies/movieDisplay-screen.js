import React, {useState, useEffect, useRef} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, ScrollView} from 'react-native';

import NextBtn from '../../components/buttons/nextBtn';
import PreviousBtn from '../../components/buttons/previousBtn';


import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import MovieBottomDisplay from './movieBottomDisplay';

const { width: screenWidth } = Dimensions.get('window');

export default function MovieDisplay({navigation, route}) {

    const [state, setState] = useState(0);
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getMovieData()
    }, [])
    const carouselRef = useRef(null);


    const getMovieData = async() => {
        const url = `https://fetch-movie-server.herokuapp.com/search/${route.params.genres}/${route.params.providers}`
        try {
            const response = await fetch(url)
            const json = await response.json();
            setData(json)
            setIsLoaded(!isLoaded)
        } catch (error) {
            console.log(error)
        }}

       function _renderItem ({item, index}, parallaxProps) {
            return (
                <View style={styles.item}>
                    <ParallaxImage
                        source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`}}
                        containerStyle={styles.imageContainer}
                        style={styles.image}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
                </View>
            )
        }
        function testFunction(index) {
            setState(index)
        }

        const goForward = () => {
            carouselRef.current.snapToNext();
          };
        
          const goBack = () => {
              carouselRef.current.snapToPrev();
          }

    return (
        (isLoaded !== true)
        ?
        <Text>Loading Please Wait</Text>
        :
        
        <LinearGradient
            style={styles.container}
            colors={['#0f0c29', '#302b63', '#24243e']}>
            
            <SafeAreaView>
                <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 70}
                data={data.results}
                renderItem={_renderItem}
                hasParallaxImages={true}
                enableSnap={true}
                loop={true}
                onSnapToItem={testFunction}
                />
                <View style={styles.carouselButtonContainer}>
                <PreviousBtn goBack={goBack} />
                <NextBtn goForward={goForward} />
                </View>
                <MovieBottomDisplay data={data.results} state={state}/>
            </SafeAreaView>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    carouselButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute'
    },
    item: {
        width: screenWidth - 70,
        height: screenWidth - 50
    },
    imageContainer: {
        flex: 1,
       backgroundColor: '#fff',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,  
        resizeMode: 'cover'
    },
    title: {
        fontSize: 32,
        color: '#fff',
        textAlign: 'center'
    },
})

