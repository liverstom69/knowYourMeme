import { createStackNavigator } from 'react-navigation';
import Home from '../screen/Home';

const Main = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
}, {
  initialRouteName: 'Home',
});

export default Main;
