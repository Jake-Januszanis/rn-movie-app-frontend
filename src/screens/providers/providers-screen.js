

import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import ToggleButtons from '../../components/toggleButtons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Providers({navigation, route}) {

    const [providers, setProviders] = useState([])

    const {genres} = route.params;
    
    const providerData = [
        {type: 'Netflix', id: 8},
        {type: 'Amazon', id: 9},
        {type: 'Disney', id: 337},
        {type: 'HBO', id: 118},
        {type: 'HBO Max', id: 384},
        {type: 'Hulu', id: 15}
    ];


    function handlePress(value) {
        providers.includes(value)
        ?
        deleteProviders(value)
        :
        setProviders([...providers, value])
    }

    function deleteProviders(value) {
        const array = [...providers];
        const index = array.indexOf(value)
        array.splice(index, 1);
        setProviders(array)
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={['#0f0c29', '#24243e']}>
        <View>
            <Text style={styles.title}>Streaming Services</Text>
            <ToggleButtons 
                data={providerData} 
                state={providers} 
                handlePress={handlePress} 
            />
            <LinearGradient
                colors={['#8A2387', '#E94057', '#F27121' ]}
                style={styles.nextButton}
                >
            <Pressable
                    onPressIn={() => navigation.navigate('MovieDisplay', {
                    genres: genres,
                    providers: providers
                })}>
                <Text style={styles.nextButtonText}>Find Movies</Text>
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
        fontSize: 40,
        textAlign: 'center',
        color: '#fff'
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