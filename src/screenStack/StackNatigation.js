import React from "react";
import { Button, Alert } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Update from "../screens/Update";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import DrawerNavigation from "../screenDrawer/DrawerNavigation";
import MyUserProfile from "../screens/screensProfile/MyUserProfile";
import MyUser from "../screens/screensProfile/MyUser";
import ketnoimangXH from "../screens/screensProfile/ketnoimangXH";
import sanThuong from "../screens/screensProfile/sanThuong";
const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: "#F79F81" },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const MyUserProfileStackNatigation = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="MyUserProfile"
        component={MyUserProfile}
        options={{
          title: "Cá Nhân",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              backgroundColor="#F79F81"
              size={25}
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
          headerRight: () => (
            <AntDesign.Button
              backgroundColor="#F79F81"
              name="login"
              size={25}
              color="#fff"
              onPress={() => {
                Alert.alert(
                  "Đăng Xuất",
                  "Bạn có chắc chắn muốn đăng xuất không ?",
                  [
                    {
                      text: "Thoát",
                      onPress: () => null,
                      style: "Thoát",
                    },
                    {
                      text: "Đồng ý",
                      onPress: () => navigation.pop(),
                    },
                  ]
                );
                return true;
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="MyUser"
        component={MyUser}
        options={{
          title: "Thông Tin Tài Khoản",
        }}
      />
      <Stack.Screen
        name="ketnoimangXH"
        component={ketnoimangXH}
        options={{
          title: "Kết nối mạng xã hội",
        }}
      />
      <Stack.Screen name="santhuong" component={sanThuong} options={{ title :"Thử thách & Phần thưởng"}}/>
    </Stack.Navigator>
  );
};
const LoginStackNatigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Đăng ký" }}
      />
    </Stack.Navigator>
  );
};
const StackNatigation = ({ route, navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Trang Chủ",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              backgroundColor="#F79F81"
              size={25}
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={({ route }) => ({ title: route.params.namesp })}
      />
    </Stack.Navigator>
  );
};
const ContactStackNatigation = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: "Tiếp xúc",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              backgroundColor="#F79F81"
              size={25}
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const UpdateStackNatigation = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Updates"
        component={Update}
        options={{
          title: "Cập nhật",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              backgroundColor="#F79F81"
              size={25}
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {
  StackNatigation,
  ContactStackNatigation,
  UpdateStackNatigation,
  LoginStackNatigation,
  MyUserProfileStackNatigation,
};
