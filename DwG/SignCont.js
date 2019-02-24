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
      this.state = {id:0};
  }

  onPress = () => {
      firebase.database().ref('id/').on('value', function (snapshot) {
          this.setState({id: snapshot.val()});
      });
  }

  render = () => {

    const { containerStyles, content } = this.props;

    if (this.state.id === 0) {
      // No image or anything - no sign detected
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Text> No Sign Detected </Text>
          </View>
          </TouchableOpacity>
      );
    } else if (this.state.id === 1) {
      // Go straight
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Image style={{width: 350, height: 350}} source={straight} />
          </View>
        </TouchableOpacity>
      );
    } else if (this.state.id === 2) {
      // Turn Back
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Image style={{width: 350, height: 350}} source={back} />
          </View>
        </TouchableOpacity>
      );
    }  else if (this.state.id === 3) {
      // Turn Left
      return (
        <TouchableOpacity>
          <View style={containerStyles}>
            <Image style={{width: 350, height: 350}} source={left} />
          </View>
        </TouchableOpacity>
      );
    }  else if (this.state.id === 4) {
      // Turn Right
      return (
        <TouchableOpacity>
        <View style={containerStyles}>
          <Image style={{width: 350, height: 350}} source={right} />
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
