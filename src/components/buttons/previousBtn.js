import React from 'react';
import { View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function PreviousBtn({goBack}) {
    return (
        <View>
            <Pressable
                style={{paddingHorizontal: 10, top: 270}}
                onPressIn={goBack}>
                <FontAwesome name="chevron-left" size={70} color="white" />
            </Pressable>
        </View>
    )
}

