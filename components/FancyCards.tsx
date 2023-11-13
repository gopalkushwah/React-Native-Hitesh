import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const CardImage = require('../assets/c.jpg');
const CardImage1 = require('../assets/b.jpg');
const CardImage2 = require('../assets/w.jpg');
const FancyCards = () => {
  return (
    <View>
        <Text style={styles.headingText}>FancyCards</Text>
        <View style={[styles.card,styles.cardFancy]}>
            <View style={styles.cardInner}>
            <Image
                source={CardImage}
               
                style={styles.cardImage}
            ></Image>
                <View style={styles.cardBody}>
                    <Text  style={styles.cardTitle}>Dell Vostro with Intel® Core™ i5 processor</Text>
                    <Text  style={styles.cardLable}>$ 5300</Text>
                    <Text  style={styles.cardDescription}>Processor: Intel Core i5-1135G7 11th Generation Processor (up to 4.20 GHz, 8MB Cache, 4 Cores)</Text>
                    <Text  style={styles.cardDescription}>RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) &</Text>
                    <Pressable  style={styles.cardPressable}><Text  style={styles.cardPressableText}>Buy Now</Text></Pressable>
                    
                </View>
            </View>
        </View>
        
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText : {
        color: 'black',
        fontSize: 25,
        fontWeight : 'bold',
        margin : 10,
        flex:1,
    },
    card : {
    },
    cardFancy : {
        margin: 10,
        elevation:5,
        shadowColor:'rgba(0,0,0,0.4)',
        shadowOffset : {
            width : 1,
            height :1
        },
        borderRadius:5
    },
    cardInner : {
        margin: 8,
        borderRadius:20
    },
    cardBody : {
        margin: 8,
        borderRadius:20
    },
    cardTitle:{
        color:'black',
        fontSize :17
    },
    cardLable:{
        color:'green',
        fontSize :17
    },
    cardDescription:{
        color:'black',
        fontSize :13
    },
    cardPressable:{
        backgroundColor:'blue',
        padding : 10,
        borderRadius:4,
        marginTop:5,
    },
    cardPressableText:{
        textAlign:'center',
        color:'white',
        fontSize :17
    },
    cardImage:{
        // marginTop : 2,
        height :260,
        width:'100%',
        resizeMode :'contain',
        borderRadius:5,
        borderWidth:2,
        borderColor :'blue'
    },
    text : {
        color:'black',
        fontSize :20,
        fontWeight : 'bold'
    },
})