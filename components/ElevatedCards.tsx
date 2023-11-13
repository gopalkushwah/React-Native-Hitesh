import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text  style={styles.text}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text  style={styles.text}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text  style={styles.text}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text  style={styles.text}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text  style={styles.text}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text  style={styles.text}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text  style={styles.text}>Red</Text>
            </View>
        </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText : {
        color: 'black',
        fontSize: 25,
        fontWeight : 'bold',
        margin : 10,
        flex:1,
    },
    container : {
        padding:4
    },
    card : {
        width : 180,
        height : 100,
    },
    cardElevated : {
        backgroundColor : "lightblue",
        alignItems :'center',
        justifyContent : 'center',
        borderRadius : 5,
        margin:5,
        elevation :5,
        shadowOffset : {
            width : 1,
            height:1
        },
        shadowColor : 'black',
        borderWidth : 1,
        borderColor:'blue',
    },
    text : {
        color:'black',
        fontSize :20,
        fontWeight : 'bold'
    },
})