import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import PageTwo from './PageTwo';
import App from './app';

class Main extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="LoginScreen" component={LoginScreen} title="로그인" initial={true} hideNavBar = {true}/>
        <Scene key="pageTwo" component={PageTwo} title="TEST"/>
      //  <Scene key = "App" component={app} title="calendars"/>
      </Scene>
    </Router>
  }
}
export default Main;
