import React from 'react';
import { View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function NextBtn({goForward}) {
    return (
        <View>
            <Pressable
                style={{paddingHorizontal: 10, top: 270, left: 240}}
                onPressIn={goForward}>
                <FontAwesome name="chevron-right" size={70} color="white" />
            </Pressable>
        </View>
    )
}

