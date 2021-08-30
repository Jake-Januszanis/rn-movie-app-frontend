import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function MovieDisplay({navigation, route}) {

    useEffect(() => {
        // getMovieData()
        console.log(providers)
    }, [])

    const {genres, providers} = route.params;

    const getMovieData = async() => {
        try {
            const response = await fetch(`http://10.0.0.41:2000/movieData/${providers}/${genres}`)
            const json = await response.json();
            console.log(json)
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
      
            {genres.map((item, index) => {
               return <Text key={index}>Genres: {item}</Text>
            })}

            {providers.map((item,index) => {
                return <Text key={index}>Providers: {item}</Text>
            })}
            <Button 
            title='Press Me'
            onPress={() => getMovieData()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})