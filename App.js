import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import config from './secret/firebaseconfig';
import Header from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';
import reducers from './src/reducers';

class App extends Component {
   componentWillMount() {
      firebase.initializeApp(config);
   }

   render() {
      return (
         <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <View>
               <StatusBar
                  barStyle='default'
                  backgroundColor='transparent'
                  translucent
               />
               <Header />
               <LoginForm />
            </View>
         </Provider>
      );
   }
}

export default App;
