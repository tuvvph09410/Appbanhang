import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StackNatigation,
  ContactStackNatigation,UpdateStackNatigation,MyUserProfileStackNatigation
} from "../screenStack/StackNatigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Trang Chủ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={StackNatigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Cập Nhật",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
        name="Updates"
        component={UpdateStackNatigation}
      />
      <Tab.Screen  options={{
          tabBarLabel: "Cá Nhân",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} name="Contact" component={MyUserProfileStackNatigation} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
