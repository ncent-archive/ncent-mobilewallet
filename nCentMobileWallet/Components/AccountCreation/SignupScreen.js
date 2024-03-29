import React, {Component} from 'react';
import {Alert, Button, FlatList, TextInput, StyleSheet, Text, View,
 TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback  } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {userUpdate, createUser} from '../../Actions';
import {Spinner} from '../Common';

class SignupScreen extends Component {
 
   
  signUp() {
    const {first, last, email, username, phone, password, confirm} = this.props;
    this.props.createUser({first, last, email, username, phone, password, confirm});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View> 
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
    return (
        <View> 
          <Text style={styles.errorTextStyle}>
             {' '}
          </Text>
        </View>
      );
  }


  renderInputForm() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return (
      <View style = {{margin: 10}}>
            <TextInput
              autoCorrect= {false}
              style={{height: 60, paddingLeft: 30, fontSize: 22, backgroundColor: '#F8F8F8'}}
              keyboardType='email-address'
              placeholder="Email"
              value={this.props.email}
              onChangeText={(text) => this.props.userUpdate({prop:'email', value: text})}
            />
            <View style={{ height: 8}} />
            <TextInput
              autoCorrect= {false}
              style={{height: 60, paddingLeft: 30, fontSize: 22, backgroundColor: '#F8F8F8'}}
              placeholder="Password"
              value={this.props.password}
              onChangeText={(text) => this.props.userUpdate({prop:'password', value: text})}
            />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableWithoutFeedback onPress={() => Actions.popTo("LoginOrSignup")}>
            <View>
              <Text style={styles.navBarButton}>Back</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.navBarHeader}>Please Sign Up</Text>
          <TouchableWithoutFeedback onPress={() => this.signUp()}>
            <View>
              <Text style={styles.navBarButton}>Finish</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {this.renderInputForm()}

        <View style={styles.content}>
          {this.renderError()}
          <Button
            title= "Sign Up to Receive an Example Wallet"
            onPress= {() => this.signUp()}
            color = '#4c3e99'
          />
          <View style={{ height: 1}} />
          <Button
            title= "Already Have an Account? Login"
            onPress= {() => Actions.LoginScreen()}
            color = '#4c3e99'  
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorTextStyle: {
    margin: 3,
    marginTop: 0,
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 10,
    height: 75,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: .2
  },
  navBarHeader: {
    flex: 1,
    color: '#4c3e99',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 25,
    fontSize: 20,
  },
  navBarButton: {
    color: '#4c3e99',
    textAlign:'center',
    paddingTop: 25,
    width: 64
  },
  content: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0
  }
});

const mapStateToProps = (state) => {
  const {first, last, email, username, phone, password, confirm, error, loading} = state.signup;
  return {first, last, email, username, phone, password, confirm, error, loading};
}

module.exports = connect(mapStateToProps, {userUpdate, createUser})(SignupScreen);


// All the input fields
// <TextInput
//   autoCorrect= {false}
//   style={{height: 50, paddingLeft: 30, fontSize: 20}}
//   placeholder="First"
//   value={this.props.first}
//   onChangeText={(text) => this.props.userUpdate({prop:'first', value: text})}
// />
// <TextInput
//   autoCorrect= {false}
//   style={{height: 50, paddingLeft: 30, backgroundColor: 'lightgray', fontSize: 20}}
//   placeholder="Last"
//   value={this.props.last}
//   onChangeText={(text) => this.props.userUpdate({prop:'last', value: text})}
// />
// <TextInput
//   autoCorrect= {false}
//   style={{height: 50, paddingLeft: 30, fontSize: 20}}
//   placeholder="Email *"
//   value={this.props.email}
//   onChangeText={(text) => this.props.userUpdate({prop:'email', value: text})}
// />
// <TextInput
//   autoCorrect= {false}
//   style={{height: 50, paddingLeft: 30, backgroundColor: 'lightgray', fontSize: 20}}
//   placeholder="Phone Number"
//   value={this.props.phone}
//   onChangeText={(text) => this.props.userUpdate({prop:'phone', value: text})}
// />
// <TextInput
//   autoCorrect= {false}
//   style={{height: 50, paddingLeft: 30, fontSize: 20}}
//   placeholder="Username"
//   value={this.props.username}
//   onChangeText={(text) => this.props.userUpdate({prop:'username', value: text})}
// />
// <TextInput
//   autoCorrect= {false}
//   style={{height: 50, paddingLeft: 30, backgroundColor: 'lightgray', fontSize: 20}}
//   placeholder="Password *"
//   value={this.props.password}
//   onChangeText={(text) => this.props.userUpdate({prop:'password', value: text})}
// />
// <TextInput
//   autoCorrect= {false}
//   style={{height: 50, paddingLeft: 30, fontSize: 20}}
//   placeholder="Confirm Password"
//   value={this.props.confirm}
//   onChangeText={(text) => this.props.userUpdate({prop:'confirm', value: text})}
// />



