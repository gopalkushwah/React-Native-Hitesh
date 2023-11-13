import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
          <Text  style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
          <Text style={styles.text}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText : {
    color: 'black',
    fontSize: 25,
    fontWeight : 'bold',
    margin : 10,
    flex:1,
  },
  container : {
    flex:1,
    flexDirection:'row',
    padding:4,
    flexWrap :'wrap'
  },
  card : {
    width:120,
    height : 100,
    borderRadius:4,
    margin :7,
  },
  cardOne : {
    backgroundColor:'red',

    alignItems : 'center',
    justifyContent :'center',
  },
  cardTwo : {
    backgroundColor:'green',

    alignItems : 'center',
    justifyContent :'center',
  },
  cardThree : {
    backgroundColor:'blue',

    alignItems : 'center',
    justifyContent :'center',
  },
  text : {
    color:'white',
    fontSize :20,
    fontWeight : 'bold'
  }
})
export default FlatCards