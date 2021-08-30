
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ToggleButtons({data, state, handlePress}) {

    return(
        <View style={styles.btnContainer}>
            {data.map((item, index) => {
                return (
                    <Pressable
                        key={index}
                        style={{width: 115}}
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
        flexWrap: 'wrap'
    },
    button: {
        paddingVertical: 15,
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#fff',
        color: 'white',
        textAlign: 'center',
        fontSize: 13
    },
    buttonSelected: {
        borderColor: 'red'
    },
    title: {
        fontSize: 40
    }
})