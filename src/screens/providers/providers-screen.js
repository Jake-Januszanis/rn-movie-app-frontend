

import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';

export default function Providers({navigation, route}) {

    const [providers, setProviders] = useState([])

    const {genres} = route.params;
    
    const providerData = [
        {type: 'Netflix', id: 8},
        {type: 'Amazon', id: 119},
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
        <View style={styles.container}>
            <Text style={styles.title}>Which streaming service are you using?</Text>
            <View style={styles.btnContainer}>
                {providerData.map((item, index) => {
                    return (
                        <Pressable
                            key={index}
                            style={{width: 115}}
                            onPressIn={() => handlePress(item.id)}>
                            <Text
                                style={(providers.includes(item.id)) ? {...styles.button, ...styles.buttonSelected} : styles.button}>
                                {item.type}
                            </Text>
                        </Pressable>
                    )
                })}
            </View>
    
            <Button
                title='Find Movies'
                onPress={() => navigation.navigate('MovieDisplay', {
                    genres: genres,
                    providers: providers
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191932'
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
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
})