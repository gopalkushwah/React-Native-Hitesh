import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

    const openUrlHandle = (webLink :string)=>{
        Linking.openURL(webLink);
    }

  return (
    <View >
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Blog Card</Text>
        </View>
        <View style={[styles.card,styles.cardAction]}>
            <View style={styles.cardInner}>
                <View style={styles.cardTopContainer}>
                        <Text style={styles.cardTopTitle}>Java Programming</Text>
                    </View>
                <Image
                    source={require('../assets/b.jpg')}
                    style={styles.cardImage}
                ></Image>
                <View>
                    <View >
                        <Text style={[styles.cardTitle,{
                            fontSize:20
                        }]}>Learn more about Java - learn web technologies</Text>
                    </View>
                    <View >
                        <Text style={styles.cardTitle} numberOfLines={1}>We will teach you the java programming language from the biggining and from the very basics</Text>
                    </View>
                    <View style={styles.cardFooterContainer}>
                       <TouchableOpacity onPress={()=>openUrlHandle('https://www.google.com')}><Text style={[styles.cardRead,styles.button]}>Read More</Text></TouchableOpacity> 
                       <TouchableOpacity onPress={()=>openUrlHandle('https://www.google.com')}><Text style={[styles.cardFollow,styles.button]}>Follow Us</Text></TouchableOpacity> 
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingContainer:{
        margin : 10,
    },
    headingText:{
        color: 'black',
        fontSize: 25,
        fontWeight : 'bold',
    },
    cardTopContainer:{
        marginVertical :10,
        paddingHorizontal : 5,
         
    },
    cardTopTitle:{
        color:'white',
        fontSize:25,
        fontWeight : '900',
        textAlign:'center'
    },
    // headingContainer:{},
    card : {
        backgroundColor:'#192A56'
    },
    cardAction : {
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
    cardImage:{
        // marginTop : 2,
        height :260,
        width:'100%',
        resizeMode :'contain',
        borderRadius:5,
        borderWidth:2,
        borderColor :'white'
    },
    cardTitle:{
        color : '#fff'
    },
    cardFooterContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    button:{
        paddingHorizontal : 20,
        paddingVertical:10,
        color:'white',
        marginVertical:10,
        fontSize:20,
        borderRadius:6
    },
    cardRead:{
        backgroundColor:'red',
        
    },
    cardFollow:{
        backgroundColor:'orange'
    },

    
})