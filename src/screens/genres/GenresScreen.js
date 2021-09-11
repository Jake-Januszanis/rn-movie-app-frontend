
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import ToggleChips from '../../components/buttons/ToggleChips';


export default function Genres({navigation}){

    const [genres, setGenres] = useState([]);

    const genresData = [
        {type: 'Action', id: 28},
        {type: 'Adventure', id: 12},
        {type: 'Anime', id: 16},
        {type: 'Crime', id: 80},
        {type: 'Comedy', id: 35},
        {type: 'Drama', id: 18},
        {type: 'Fantasy', id: 14},
        {type: 'Horror', id: 27},
        {type: 'Romance', id: 10749},
        {type: 'Sci-Fi', id: 878},
        {type: 'Stand Up', id: 10402},
        {type: 'Western', id: 37},
        {type: 'Documentary', id: 99}
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
        <LinearGradient
            style={styles.container}
            colors={['#0f0c29', '#24243e']}>
        <View>
        
            <Text style={styles.title}>Genres</Text>
          
            <ToggleChips
                data={genresData} 
                state={genres} 
                handlePress={handlePress} 
            />
            <LinearGradient
                colors={['#8A2387', '#E94057', '#F27121' ]}
                style={styles.nextButton}
                >
            <Pressable
                onPressIn={() => navigation.navigate('Providers', {
                genres: genres
            })}>
                <Text style={styles.nextButtonText}>Next</Text>
            </Pressable>
            </LinearGradient>
           
        </View>
         </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 60,
        color: '#fff',
        textAlign: 'center'
    },
    nextButton: {
        height: 58,
         marginHorizontal: 60,
          borderRadius: 20,
           justifyContent: 'center',
            alignItems: 'center',
             marginTop: 10
    },
    nextButtonText: {
        fontSize: 40,
        textAlign: 'center',
        height: 54,
        width: 268,
        color: '#fff',
        backgroundColor: '#242441',
        borderRadius: 20,
    }
})

