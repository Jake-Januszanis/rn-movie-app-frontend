import React from 'react';
import { View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function NextBtn({goForward}) {
    return (
        <View>
            <Pressable
                onPressIn={goForward}>
                <FontAwesome name="chevron-right" size={50} color="white" />
            </Pressable>
        </View>
    )
}

