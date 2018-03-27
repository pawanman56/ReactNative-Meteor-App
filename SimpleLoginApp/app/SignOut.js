import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

import Meteor from 'react-native-meteor';

const { width } = Dimensions.get('window');

const navigationOptions = {
  header: null,
};

class SignOut extends Component {
  static navigationOptions = navigationOptions;

  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  logOut() {
    Meteor.logout((error) => {
      if (error) {
        this.setState({error: "Oops! Something went wrong."})
      } else {
        this.refs.toast.show("Signed Out.", 500);
        this.props.navigation.navigate('SignIn');
      }
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>{this.state.error}</Text>
        <TouchableOpacity style={styles.button} onPress={this.logOut.bind(this)}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>

        <Toast ref="toast" />
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