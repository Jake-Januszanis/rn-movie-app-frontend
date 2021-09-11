import React from 'react';
import { View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function PreviousButton({goBack}) {
    return (
        <View>
            <Pressable
                onPressIn={goBack}>
                <FontAwesome name="chevron-left" size={50} color="white" />
            </Pressable>
        </View>
    )
}

