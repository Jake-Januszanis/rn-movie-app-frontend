import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import MovieBottomDisplay from './movieBottomDisplay';
import CarouselDisplay from '../../components/carousel/carousel';

export default function MovieDisplay({navigation, route}) {

    const [state, setState] = useState(0);
    const [page, setPage] = useState(0)
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getMovieData()
    }, [])

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

    return (
        (isLoaded !== true)
        ?
        <Text>Loading Please Wait</Text>
        :
        <LinearGradient
            style={{flex: 1,}}
            colors={['#0f0c29', '#302b63', '#24243e']}>
                <CarouselDisplay data={data} page={page} state={state} setState={setState}/> 
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
    title: {
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
    },
})

