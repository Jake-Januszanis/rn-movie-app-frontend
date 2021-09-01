
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import ToggleButtons from '../../components/toggleButtons';


export default function Genres({navigation}){

    // useEffect(() => {
    //     searchForServer()
    // }, [])

    // const searchForServer = async() => {
    //     try {
    //         const response = await fetch('https://fetch-movie-server.herokuapp.com/search')
    //         const text = await response.text();
    //         console.log(text)
    //         return;
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }


    const [genres, setGenres] = useState([]);

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

    function handlePress(value) {
        genres.includes(value)
            ?
            deleteGenre(value) 
            :
            setGenres([...genres, value])
    }

    function deleteGenre(value) {
        const array = [...genres];
        const index = array.indexOf(value);
        array.splice(index, 1);
        setGenres(array)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Genre Selection Screen</Text>
          
            <ToggleButtons 
                data={genresData} 
                state={genres} 
                handlePress={handlePress} 
            />
        
            <Button
                title={'Next'}
                color={'red'}
                onPress={() => navigation.navigate('Providers', {
                    genres: genres
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#191932'
    },
    title: {
        fontSize: 40
    }
})