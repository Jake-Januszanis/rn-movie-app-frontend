import React from 'react'
import { Modal, Text, View, StyleSheet, Pressable, Image, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';



export default function MovieDetailsModal({isModalOpen, setIsModalOpen, data, state}) {

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
    ];

    return (
   
        <Modal
        style={styles.modalContainer}
        animationType="slide"
        visible={isModalOpen}>
             
            <LinearGradient
                style={styles.container}
                colors={['#0f0c29', '#302b63', '#24243e']}>
                    
                        <Image
                            style={styles.image}
                            source={{ uri: `https://image.tmdb.org/t/p/w780${data.backdrop_path}` }}
                            resizeMode='cover'>
                        </Image>
                        
                        <View style={styles.detailsContainer}>
                           
                        <Text style={styles.title}>{data.title}</Text>
                        <LinearGradient
                            colors={['#8A2387', '#E94057', '#F27121' ]}
                            style={styles.yearBubble}>
                                <Text style={styles.mediumText}>
                                    {data.release_date.slice(0,4)}
                                </Text>
                        </LinearGradient>
                        <View style={styles.flexRow}>
                            {data.genre_ids.slice(0,3).map((item, index) => {
                                const genre = genresData.find(obj => obj.id === item)
                                return <Text key={index} style={styles.genres}>                 
                                            {genre.type}                  
                                        </Text>                                              
                        })}
                        </View>
                        <Text style={{fontSize: 30, color: '#fff'}}>Summary:</Text>
                        <Text style={{fontSize: 18, color: '#fff'}}>{data.overview}</Text>
                        
                        </View>
              
                        <Pressable onPressIn={() => setIsModalOpen(false)}>
                        <Text style={{fontSize: 27, color: 'white'}}>Close</Text>
                    </Pressable>
                    
            </LinearGradient>
    
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    container: {
        flex: 1,
    },
    detailsContainer: {
        flex: 2,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',   
    },
    image: {
        flex: 2,
    },
    title: {
        fontSize: 35,
        color: '#fff', 
    },
    mediumText: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },
    genres: {
        color: 'gray', 
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 8,
        marginRight: 10,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    },
    
    yearBubble: {
        borderRadius: 20,
        marginVertical: 3,
        paddingVertical: 2,
        width: 90,
    },
})