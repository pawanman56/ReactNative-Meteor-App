import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from "react-navigation";

import SignIn from './SignIn';
import SignOut from './SignOut';

import Meteor, { connectMeteor } from 'react-native-meteor';

const Routes = StackNavigator({
  SignIn: {screen: SignIn},
  SignOut: {screen: SignOut}
});
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
    return (
      <Routes />
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
