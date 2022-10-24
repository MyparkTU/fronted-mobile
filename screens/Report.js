import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Report() {
    return (
        <ScrollView style={styles.contain}>
            <Text style={styles.text}>
                Report
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: 'black',
        alignSelf: 'center',
        top: 53,
        fontSize: 18,
        fontWeight: 'bold',
    }
})