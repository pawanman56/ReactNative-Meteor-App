import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SignIn from './SignIn';
import SignOut from './SignOut';

import Meteor, { connectMeteor } from 'react-native-meteor';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.data = {};
  }

  componentWillMount() {
    const url = 'ws://192.168.31.84:3000/websocket';

    Meteor.connect(url);
  }

  getMeteorData() {
    return{
      user: Meteor.user()
    };
  }

  render() {
    if (this.data.user) {
      return (
        <View style={styles.container}>
          <SignOut />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
