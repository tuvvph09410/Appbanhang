import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
import TabNavigator from "../screenTab/TabNavigator";

import {
  UpdateStackNatigation,
  ContactStackNatigation,
  MyUserProfileStackNatigation,
} from "../screenStack/StackNatigation";

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="TabHome">
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ title: "Trang Chủ" }}
      />
      <Drawer.Screen
        name="Updates"
        component={UpdateStackNatigation}
        options={{ title: "Cập Nhật" }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactStackNatigation}
        options={{ title: "Tiếp Xúc" }}
      />
      <Drawer.Screen
        name="MyUserProfile"
        component={MyUserProfileStackNatigation}
        options={{ title: "Cá Nhân" }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
