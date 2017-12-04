import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, loginUser, passwordChanged } from './../actions';

class LoginForm extends Component {
   onEmailChange(text) {
      this.props.emailChanged(text);
   }

   onPasswordChange(text) {
      this.props.passwordChanged(text);
   }

   onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
   }

   renderError() {
      if (this.props.error) {
         return (
            <Text>{this.props.error}</Text>
         );
      }
   }

   renderButton() {
      if (this.props.loading) {
         return (
            <Spinner />
         );
      }
      return (
         <Button onPress={this.onButtonPress.bind(this)}>
            LOGIN
         </Button>
      );
   }

   render() {
      return (
         <Card>
            <CardSection>
               <Input
                  label='Email'
                  placeholder='mail@mail.com'
                  onChangeText={this.onEmailChange.bind(this)}
                  //value used to store text state so it won't refresh the last typed characters
                  value={this.props.email}
               /> 
            </CardSection>

            <CardSection>
               <Input
                  label='Password'
                  placeholder='password'
                  onChangeText={this.onPasswordChange.bind(this)}
                  secureTextEntry
                  value={this.props.password}
               />
            </CardSection>

            <CardSection>
               {this.renderButton()}
            </CardSection>

            <CardSection>
               {this.renderError()}
            </CardSection>
         </Card>
      );
   }
}

const mapStateToProps = (state) => {
   const { email, error, loading, password } = state.auth;
   return { email, error, loading, password };
};

export default connect(mapStateToProps, { emailChanged, loginUser, passwordChanged })(LoginForm);
