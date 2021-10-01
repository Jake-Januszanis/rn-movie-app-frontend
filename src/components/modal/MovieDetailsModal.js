import React, {useState} from 'react'
import { Modal, Text, View, StyleSheet, Pressable, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';



export default function MovieDetailsModal({modalVisible, setModalVisible, data, state}) {





    return (
   
        <Modal
        style={styles.modalContainer}
        animationType="slide"
        visible={modalVisible}
        >
            
            <LinearGradient
                style={styles.container}
                colors={['#0f0c29', '#302b63', '#24243e']}>
                    {/* <Pressable onPressIn={() => setModalVisible(false)}>
                        <Text style={{fontSize: 30, color: 'white'}}>Close</Text>
                    </Pressable>
                     */}
                        <Image
                        style={styles.image}
                        source={{ uri: `https://image.tmdb.org/t/p/w1280${data[state].backdrop_path}` }}
                        resizeMode='cover'
                        >
                        </Image>
                        <View style={styles.detailsContainer}>
                        <View style={styles.flexRow}>
                        <Text style={styles.title}>{data[state].title}</Text>
                        <LinearGradient
                            colors={['#8A2387', '#E94057', '#F27121' ]}
                            style={styles.yearBubble}>
                                <Text style={styles.mediumText}>
                                    {data[state].release_date.slice(0,4)}
                                </Text>
                        </LinearGradient>
                        </View>
                        </View>
              
                        <Pressable onPressIn={() => setModalVisible(false)}>
                        <Text style={{fontSize: 30, color: 'white'}}>Close</Text>
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
        paddingHorizontal: 20
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    image: {
        flex: 1.3,
    },
    title: {
        fontSize: 35,
        color: '#fff',
        backgroundColor: 'red',
        
    },
    mediumText: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },
    
    yearBubble: {
        borderRadius: 20,
        marginVertical: 3,
        paddingVertical: 2,
        width: 90,
        marginLeft: 15
    },
})