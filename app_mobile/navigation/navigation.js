import { createStackNavigator, createAppContainer } from 'react-navigation';
import ScreenProfile from '../Screens/ScreenProfile';
import BottomTab from './BottomTab';

const AppNavigator = createStackNavigator({
    Home: {screen: BottomTab},
    Profile: {screen: ScreenProfile},
  });
  
const App = createAppContainer(AppNavigator);
  
export default App;