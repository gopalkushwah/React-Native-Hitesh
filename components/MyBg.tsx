import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

const MyBg = () => {
    const [color, setColor] = useState('#ffffff');
    const [isColor, setIsColor] = useState(false);

    const handleColor = () =>{
        let colorText = '0123456789ABCDEF';
        let colorGen = '#';
        for (let i = 0; i < 6; i++) {
            colorGen += colorText.charAt(Math.round(Math.random() * colorText.length));
        }
        // console.warn(colorGen);
        setColor(colorGen);
    }

  return (
    <View style={[styles.container,{backgroundColor:color}]}>
        <StatusBar backgroundColor={color}></StatusBar>
      <Text style={styles.text}>BG Changer</Text>
      <TouchableOpacity 
        style={styles.btn}
        onPress={handleColor}
      >
        <Text style={styles.btnText}>Click To Change</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyBg
