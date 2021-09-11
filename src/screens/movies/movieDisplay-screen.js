import React, {useState, useEffect, useRef} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, ScrollView} from 'react-native';

import NextBtn from '../../components/buttons/nextBtn';
import PreviousBtn from '../../components/buttons/previousBtn';


import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import MovieBottomDisplay from './movieBottomDisplay';

const { width: screenWidth } = Dimensions.get('window');

export default function MovieDisplay({navigation, route}) {

    const [state, setState] = useState(0);
    const [page, setPage] = useState(0)
    const [data, setData] = useState([]);
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
            const list = await json.results.splice(10)
            setData(data.concat([list], [json.results]))
            setIsLoaded(!isLoaded)
        } catch (error) {
            console.log(error)
        }}

       function renderItem ({item, index}, parallaxProps) {
            return (
                    <ParallaxImage
                        source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}` }}
                        containerStyle={styles.imageContainer}
                        style={styles.image}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
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
                style={{flex: 1,}}
                colors={['#0f0c29', '#302b63', '#24243e']}>  
                <View style={{flex: 2}}>
                <Carousel
                    ref={carouselRef}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth - 70}
                    data={data[page]}
                    renderItem={renderItem}
                    hasParallaxImages={true}
                    enableSnap={true}
                    onSnapToItem={testFunction}
                />
                    <View style={styles.carouselButtonContainer}>
                    <PreviousBtn goBack={goBack} />
                    <Pagination
                        dotsLength={data[page].length}
                        activeDotIndex={state}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                    <NextBtn goForward={goForward} />
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <MovieBottomDisplay data={data[page]} state={state}/>
                </View>
            </LinearGradient> 
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        marginVertical: 45,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,  
        resizeMode: 'contain',
    },
    title: {
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
    },
})

