import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function MovieDetails({data, state, setIsModalOpen}) {
    
    const genresData = [
        {type: 'Action', id: 28},
        {type: 'Adventure', id: 12},
        {type: 'Anime', id: 16},
        {type: 'Crime', id: 80},
        {type: 'Comedy', id: 35},
        {type: 'Documentary', id: 99},
        {type: 'Drama', id: 18},
        {type: 'Fantasy', id: 14},
        {type: 'Horror', id: 27},
        {type: 'Romance', id: 10749},
        {type: 'Sci-Fi', id: 878},
        {type: 'Stand Up', id: 10402},
        {type: 'Western', id: 37},
        {type: 'Thriller', id: 53},
        {type: 'War', id: 10752},
        {type: 'Family', id: 10751},
        {type: 'History', id: 36},
        {type: 'Mystery', id: 9648},
        {type: 'TV Movie', id: 10770}
    ]


    return (
    
        <View style={styles.detailsContainer}>
            <ScrollView>
                    <Text style={styles.title}>{data[state].title}</Text>
                    <View style={styles.rowContainer}>
                        {data[state].genre_ids.splice(0,3).map((item, index) => {
                           const genre = genresData.find(obj => obj.id === item)
                                 return <Text key={index} style={styles.genres}>                 
                                            {genre.type}                  
                                        </Text>   
                                                                 
                        })}
                    </View>
                    <View style={styles.rowContainer}>
                        <AntDesign 
                        name='star'
                        size={35}                   
                        color='#FFD200'                    
                        style={{paddingRight: 5, paddingTop: 5}}/>                                        
                        <Text                
                            style={styles.rating}>                
                            {data[state].vote_average}                
                        </Text>                
                    </View>
                    <View style={{alignItems: 'center'}}>
                    <Pressable onPressIn={() => setIsModalOpen(true)} style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>See Details</Text>
                    </Pressable>
                    </View>
                     </ScrollView>               
              </View>
                
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    genres: {
        color: 'gray', 
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 8,
        marginHorizontal: 6,
        marginTop: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    },
    rating: {
        color: '#fff',
        fontSize: 35,
    },
    detailsButton: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        height: 60,
        width: 250,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsButtonText: {
        fontSize: 30,
        color: '#fff',
    }
})