import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen.js';
import movieResults from './movieResults.js';
import SinglePage from './SinglePage.js';


const Routes = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Results: {
    screen: movieResults,
  },
  SinglePage: {
    screen: SinglePage,
  }
},
{
    initialRouteName: 'Home',
},
);

export default createAppContainer(Routes);