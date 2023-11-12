import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
      <View style={styles.container}>
        <Text
        style={isDarkMode ? styles.whiteText : styles.blackText}
        >Hello</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    alignItems:'center',
    justifyContent : 'center'
  },
  whiteText:{
    fontSize : 30,
    color :'white'
  },
  blackText:{
    fontSize : 30,
    color :'black'
  }
});

export default App;
