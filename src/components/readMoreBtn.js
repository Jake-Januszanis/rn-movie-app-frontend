import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function ReadMoreBtn({linesOfText, setLinesOfText}) {


    return (
        (linesOfText === 3)
        ?
        <Pressable
            onPress={() => setLinesOfText(0)}
        >
            <Text style={styles.readMoreBtn}>Read more</Text>
        </Pressable>
        :
        <Pressable
            onPress={() => setLinesOfText(3)}>
            <Text style={styles.readMoreBtn}>Hide</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    readMoreBtn: {
        color: 'red',
        fontSize: 17,
        textAlign: 'right',
        paddingRight: 20

    }
})