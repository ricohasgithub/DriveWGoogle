import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import firebase from 'firebase';

const config = {
    databaseURL: "https://divew-89181.firebaseio.com",
    projectId: "divew-89181",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

// Image imports
export const straight = require('./assets/moveStraight.png');
export const back = require('./assets/turnBack.png');
export const left = require('./assets/turnLeft.png');
export const right = require('./assets/turnRight.png');

let co = 'None';

class SignCont extends Component {

  static propTypes = {
    containerStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired
  };

  constructor(props) {
      super(props);
      this.state = {id:'None'};
  }

  readUserData() {
      firebase.database().ref('id/').on('value', function (snapshot) {
          return (<Text> snapshot.val(); </Text>);
      });
  }

  // onPress = () => {
  //   firebase.database().ref('id/').once('value', function (snapshot) {
  //       co = snapshot.val();
  //   });
  // }

  render = () => {

    const { containerStyles, content } = this.props;

    if (this.state.id === 'None') {
      // No image or anything - no sign detected
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Text> No Sign Detected </Text>
            <Text> {this.readUserData} </Text>
          </View>
          </TouchableOpacity>
      );
    } else if (this.state.id === 'Move Straight') {
      // Go straight
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Image style={{width: 350, height: 350}} source={straight} />
            <Text> {this.state.id} </Text>
          </View>
        </TouchableOpacity>
      );
    } else if (this.state.id === 'Turn Back') {
      // Turn Back
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Image style={{width: 350, height: 350}} source={back} />
            <Text> {this.state.id} </Text>
          </View>
        </TouchableOpacity>
      );
    }  else if (this.state.id === 'Turn Left') {
      // Turn Left
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Image style={{width: 350, height: 350}} source={left} />
            <Text> {this.state.id} </Text>
          </View>
        </TouchableOpacity>
      );
    }  else if (this.state.id === 'Turn Right') {
      // Turn Right
      return (
        <TouchableOpacity>
        <View style={containerStyles}>
          <Image style={{width: 350, height: 350}} source={right} />
          <Text> {this.state.id} </Text>
        </View>
        </TouchableOpacity>
      );
    }

  }

}

// <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDkKcOhfxURfLwG6z3JP_bgVL6kqqadHis",
//     authDomain: "divew-89181.firebaseapp.com",
//     databaseURL: "https://divew-89181.firebaseio.com",
//     projectId: "divew-89181",
//     storageBucket: "divew-89181.appspot.com",
//     messagingSenderId: "1070463320718"
//   };
//   firebase.initializeApp(config);
// </script>


export default SignCont;
