import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react/cjs/react.production.min'

const Task = (props) => {
    const [Finish, setFinish] = React.useState(false);
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text>{props.text}</Text>
            </View>
            <TouchableOpacity
                style={styles.circular}
            >
                <View ></View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 7,
    },
    circular: {
        width: 20,
        height: 20,
        borderColor: '#55BCF6',
        borderRadius: 10,
        borderWidth: 2,
    },
})

export default Task;