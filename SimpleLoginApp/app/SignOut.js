import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

import Meteor from 'react-native-meteor';

const { width } = Dimensions.get('window');

class SignOut extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => Meteor.logout()}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const ELEMENT_WIDTH = width - 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button: {
    width: ELEMENT_WIDTH,
    height: 40,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#4C7B95',
    borderWidth: 1,
    borderColor: '#355668',
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "600",
    color: '#FFFFFF',
  },
});

export default SignOut;