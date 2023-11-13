import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Satyam = require('../assets/satyam.png')
const data = [
    {
        id: 1,
        name : 'Satyam',
        work : 'Software Engineer',
        phone : '9988776655',
        image:Satyam
    },
    {
        id: 2,
        name : 'Satyam',
        work : 'Software Engineer',
        phone : '9988776655',
        image:Satyam
    },
    {
        id: 3,
        name : 'Satyam',
        work : 'Software Engineer',
        phone : '9988776655',
        image:Satyam
    },
    {
        id: 4,
        name : 'Satyam',
        work : 'Software Engineer',
        phone : '9988776655',
        image:Satyam
    },
    {
        id: 5,
        name : 'Satyam',
        work : 'Software Engineer',
        phone : '9988776655',
        image:Satyam
    }
]
const ContactsCard = () => {
  return (
    <View>
      {
        data.map(({id,name,phone,work,image})=>(
            <View key={id} style={styles.container}>
                {/* <Text>{image}</Text> */}
                <Image source={image}
                style={styles.contactImage}></Image>
                <View>
                    <Text style={[styles.contactHeading,styles.heading]}>{name}</Text>
                    <Text style={[styles.contactNumber,styles.heading]}>{phone}</Text>

                </View>
            </View>
        ))
      }
    </View>
  )
}

export default ContactsCard

const styles = StyleSheet.create({
    contactImage : {
        width : '20%',
        height:80,
        borderRadius : 80,
        borderColor:'gold',
        borderWidth:1,
        marginRight:20
    },
    container : {
        flex :1,
        flexDirection :'row',
        alignItems :'center',
        backgroundColor:'purple',
        padding:10,
        margin:10,
        borderRadius:8
    },
    contactHeading : {
        fontSize : 25
    },
    contactNumber : {
        fontSize:15
    },
    heading : {
        color:'white'
    },
    // contactImage : {},
})