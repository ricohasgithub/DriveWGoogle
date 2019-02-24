import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

// Image imports
export const left = require('./assets/s1.png');
export const right = require('./assets/');
export const straight = require('./assets/');
export const back = require('./assets/');

class SignCont extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    containerStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  };

  constructor(props) {
      super(props);
      this.state = {complete: false};
  }

  onPress = () => {
    this.setState({
      complete: true
    })
  }

  render = () => {

    const { containerStyles, buttonStyles, content } = this.props;

  }

}


export default SignCont;
