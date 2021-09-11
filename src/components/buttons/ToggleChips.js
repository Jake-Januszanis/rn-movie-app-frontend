
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ToggleChips({data, state, handlePress}) {

    return(
        <View style={styles.btnContainer}>
            {data.map((item, index) => {
                return (
                    <Pressable
                        key={index}
                        onPressIn={() => handlePress(item.id)}>
                    <Text
                        style={(state.includes(item.id)) ? {...styles.button, ...styles.buttonSelected} : styles.button}>
                        {item.type}
                    </Text>
                    </Pressable>
                    )
            })}
        </View>
)
}

const styles = StyleSheet.create({
 
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginVertical: 30
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        backgroundColor: 'rgba(219, 219, 219, 0.27)',
        minWidth: 100
    },
    buttonSelected: {
        backgroundColor: 'rgb(68, 53, 212)',
    },
    title: {
        fontSize: 40
    }
})