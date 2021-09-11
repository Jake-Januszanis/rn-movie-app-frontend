import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import MovieDetails from './MovieScreenDetails';
import CarouselDisplay from '../../components/carousel/Carousel';
import fetchMovies from '../../api/api'

export default function MovieDisplay({navigation, route}) {

    const [state, setState] = useState(0);
    const [page, setPage] = useState(0)
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect( () => {
        const getData = async (genres, providers) => {
            try {
                const response = await fetchMovies(genres, providers);
                const list = await response.splice(10)
                setData(data.concat([list], [response]))
                setIsLoaded(!isLoaded)
                console.log(data.length)
            } catch(error) {
                console.log(error)
            }
        }
        getData(route.params.genres, route.params.providers)
    }, [])
    
    return (
        (isLoaded !== true)
        ?
        <Text>Loading Please Wait</Text>
        :
        <LinearGradient
            style={styles.container}
            colors={['#0f0c29', '#302b63', '#24243e']}>
                <CarouselDisplay data={data} page={page} state={state} setState={setState}/> 
                <View style={{flex: 1}}>
                    <MovieDetails data={data[page]} state={state}/>
                </View>
        </LinearGradient> 
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

