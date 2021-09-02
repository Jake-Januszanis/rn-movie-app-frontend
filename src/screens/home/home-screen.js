
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View,Text, StyleSheet, StatusBar, Pressable, Image } from 'react-native';
import MainImage from '../../assets/Images/mainImage.png';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
  


export default function Home({ navigation }) {
    let [fontsLoaded] = useFonts({
        Lato_900Black,
      });

    return (
        (!fontsLoaded) ?
        <Text>App Loading</Text>
        :
        <LinearGradient
            colors={['#8A2387', '#E94057', '#F27121' ]}
            style={styles.container}>
            <View style={styles.container}>
            <StatusBar></StatusBar>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>FLINGO</Text>
                <Text style={styles.subTitle}>Not sure what to watch next? Dont worry we're here to help!</Text>
            </View>
            <Image 
                style={styles.image}
                source={MainImage}
                resizeMode='contain'
            />
         
            <Pressable
                style={styles.button}
                onPressIn={() => navigation.navigate('Genres')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
       
        </View>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        fontFamily: 'Lato_900Black',
        color: '#F27121'
    },
    subTitle: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff'
    },
    image: {
        height: 350,
        width: 400,
    },
    button: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        marginBottom: 100,
        marginHorizontal: 30,
        backgroundColor: 'rgba(64, 64, 64, 0.15)',
        height: 60,
    },
    buttonText: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'center'
    }
})
