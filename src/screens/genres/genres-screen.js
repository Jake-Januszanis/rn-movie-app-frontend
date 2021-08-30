
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';


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
            <View style={styles.btnContainer}>
            {genresData.map((item, index) => {
                return(
                <Pressable
                    style={{width: 130}}
                    key={index}
                    onPressIn={() => handlePress(item.id)}>
                <Text
                    style={(genres.includes(item.id)) ? {...styles.button, ...styles.buttonSelected} : styles.button}>
                    {item.type}
                </Text>
                </Pressable>
            )})}
            </View>
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
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    button: {
        paddingVertical: 15,
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#fff',
        color: 'white',
        textAlign: 'center',
        fontSize: 13
    },
    buttonSelected: {
        borderColor: 'red'
    },
    title: {
        fontSize: 40
    }
})