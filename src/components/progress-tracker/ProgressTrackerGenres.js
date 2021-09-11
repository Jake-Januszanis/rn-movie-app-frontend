import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


export default function ProgressTracker({genres}) {
    
    return (
        <View style={styles.container}>
        <View>
            {(genres.length === 0)
                ? <Entypo name="circle" size={40} color="white" />
                : <AntDesign name="checkcircleo" size={40} color="green" /> }
                <Text style={styles.text}>Genres</Text>    
        </View>

            <View style={styles.bar}></View>

        <View>
            <Entypo name="circle" size={40} color="white" />
            <Text style={styles.text}>Providers</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 70,
        paddingTop: 20,
    },
    text: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center'
    },
    bar: {
        flex: 1,
        height: 4, 
        backgroundColor: 'white',
        marginBottom: 15
    },
    greenBar: {
        color: 'green',
        backgroundColor: 'green'
    }
})
