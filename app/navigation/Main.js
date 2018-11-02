import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screen/Home';

const Main = StackNavigator({
  Home: {
    screen: <Home />,
    title: 'Home',
  },
}, {
  initialRouteName: 'Home',
});

export default Main;
