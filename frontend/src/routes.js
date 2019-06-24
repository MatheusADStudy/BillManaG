import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import ListBill from "./pages/ListBill";
import NewBill from "./pages/NewBill";

export default createAppContainer(
  createBottomTabNavigator({
    ListBill,
    NewBill
  })
);
