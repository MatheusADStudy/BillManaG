import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import Home from "./pages/ListBill";
import NewBill from "./pages/NewBill";
import Autentication from "./pages/Autentication/Application.container";
import PopUp from "./pages/Autentication/FingerprintPopup.component";

// const BottomTab = createBottomTabNavigator({
//   AutenticationStack: Autentication,
//   Home: Home,
//   Nova: NewBill
// });

// export default createAppContainer(BottomTab);

const AutenticationStack = createStackNavigator({
  Autentication: {
    screen: Autentication
  },
  Home: { screen: Home },
  PopUp: { screen: PopUp }
});

AutenticationStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index < 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  }
});

const NewBillStack = createStackNavigator({
  NewBill: {
    screen: NewBill
  }
});

const TabStackNavigator = createBottomTabNavigator({
  Home: {
    screen: PopUp,
    screen: HomeStack,
    screen: AutenticationStack
  },
  NewBill: {
    screen: NewBillStack,
    navigationOptions: () => ({
      title: "Nova Conta"
    })
  }
});

export default createAppContainer(TabStackNavigator);
