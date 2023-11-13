import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactsCard from './components/ContactsCard';


function App(): JSX.Element {
  return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCards/>
          <ContactsCard/>
          <ActionCard/>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
