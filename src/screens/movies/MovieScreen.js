import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import MovieScreenDetailsPreview from './MovieScreenDetailsPreview';
import CarouselDisplay from '../../components/carousel/carousel';
import MovieDetailsModal from '../../components/modal/MovieDetailsModal'
import fetchMovies from '../../api/api'

export default function MovieDisplay({navigation, route}) {

    const [state, setState] = useState(0);
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect( () => {
        const getData = async (genres, providers) => {
            try {
                const response = await fetchMovies(genres, providers);
                const list = await response.splice(10)
                setData(list)
                setIsLoaded(!isLoaded)
                console.log('Component rerendering')
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
                <CarouselDisplay data={data} state={state} setState={setState}/> 
                <MovieScreenDetailsPreview data={data} state={state} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                {(isModalOpen) 
                ?
                <MovieDetailsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={data[state]} />
                :
                null
                }
        </LinearGradient> 
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

