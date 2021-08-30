
import React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';


export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title='Lets Go!'
            onPress={() => navigation.navigate('Genres')}
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
    }
})