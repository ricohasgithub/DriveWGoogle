import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import firebase from 'firebase';

const config = {
    databaseURL: "https://divew-89181.firebaseio.com",
    projectId: "divew-89181",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}


const mainSignContTyles = StyleSheet.create({
  item: {
    flexDirection : 'row'
  }
});

const sideSignContStyles = StyleSheet.create({
  item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 50,
      margin: 10,
      borderColor: '#000000',
      borderWidth: 2,
      backgroundColor: '#ffffff'
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('DriveWGoogle', () => App);
