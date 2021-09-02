import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

export default function PreviousBtn({state, setState}) {
    return (
        <View style={styles.button}>
            <LinearGradient
            style={{borderRadius: 40}}
                colors={['#8E2DE2', '#4A00E0']}>
            <Pressable
             onPressIn={() => setState(state = state - 1)}>
            <AntDesign style={{padding: 3}} name="left" size={60} color="white" />
            </Pressable>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginLeft: 15,
        bottom: 30,
        borderRadius: 40,
    }
})

