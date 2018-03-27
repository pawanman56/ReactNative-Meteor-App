import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

import Meteor, { Accounts } from 'react-native-meteor';

const { width } = Dimensions.get('window');

const navigationOptions = {
  header: null,
};
class SignIn extends Component {
  static navigationOptions = navigationOptions;
  
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  onSignIn() {
    const {email, password} = this.state;

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        this.setState({ error: "Invalid input." });
      } else {
        //this.setState({ error: "Logged in successfully." });
        this.refs.toast.show("Welcome.", 500);
        this.props.navigation.navigate('SignOut');
      }
    });
  }

  onCreateAccount() {
    const {email, password} = this.state;

    Accounts.createUser({ email, password }, (error) => {
      if (error) {
        this.setState({ error: "Invalid input" });
      } else {
        //this.setState({ error: "Account created successfully." });
        this.refs.toast.show("Account create successfully.", 500);
      }
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Your Email Here"
          onChangeText={(email) => this.setState({email})}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(password) => this.setState({password})}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Text>{this.state.error}</Text>
        <TouchableOpacity style={styles.button} onPress={this.onSignIn.bind(this)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.onCreateAccount.bind(this)}>
          <Text style={styles.buttonText}>Create Account</Text>
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

  input: {
    width: ELEMENT_WIDTH,
    height: 40,
    padding: 10,
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#888888',
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

export default SignIn;