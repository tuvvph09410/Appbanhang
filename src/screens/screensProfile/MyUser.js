import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";

const MyUser = ({ navigation }) => {
  const [dataCN, setDataCN] = useState([
    {
      nameApp: "Cá nhân",
      fullName: "Họ tên",
      email: "E-mail",
    },
  ]);
  const [value, onChangeText] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataCN}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View
                style={{
                  height: 50,
                  backgroundColor: "#F2F2F2",
                  justifyContent: "center",
                  marginBottom: 5,
                  width: "100%",
                }}
              >
                <Text style={{ marginLeft: 10, fontSize: 20 }}>
                  {item.nameApp}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  backgroundColor: "#FFF",
                }}
              >
                <View
                  style={{ height: 60, flexDirection: "column", width: "90%" }}
                >
                  <Text style={{ fontSize: 12 }}>{item.fullName}</Text>
                  <View
                    style={{
                      borderBottomColor: "#c75b39",
                      borderBottomWidth: 1,
                      marginTop: 9,
                    }}
                  >
                    <TextInput
                      style={{ fontSize: 16, height: 20 }}
                      clearButtonMode="always"
                      onChangeText={(text) => onChangeText(text)}
                      placeholderTextColor="#D8D8D8"
                      placeholder="Họ tên"
                    />
                  </View>
                </View>

                <View
                  style={{
                    height: 60,
                    flexDirection: "column",
                    width: "90%",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>{item.email}</Text>
                  <View
                    style={{
                      borderBottomColor: "#c75b39",
                      borderBottomWidth: 1,
                      marginTop: 9,
                    }}
                  >
                    <TextInput
                      style={{ fontSize: 17, height: 20 }}
                      clearButtonMode="always"
                      onChangeText={(text) => onChangeText(text)}
                      placeholderTextColor="#D8D8D8"
                      placeholder="E - mail"
                    />
                  </View>
                </View>
                <View
                  style={{
                    height: 60,
                    flexDirection: "column",
                    width: "90%",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>Mật khẩu cũ</Text>
                  <View
                    style={{
                      borderBottomColor: "#c75b39",
                      borderBottomWidth: 1,
                      marginTop: 9,
                    }}
                  >
                    <TextInput
                      style={{ fontSize: 17, height: 20 }}
                      clearButtonMode="always"
                      onChangeText={(text) => onChangeText(text)}
                      placeholderTextColor="#D8D8D8"
                      placeholder="mật khẩu cũ"
                    />
                  </View>
                </View>
                <View
                  style={{
                    height: 60,
                    flexDirection: "column",
                    width: "90%",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>Mật khẩu mới</Text>
                  <View
                    style={{
                      borderBottomColor: "#c75b39",
                      borderBottomWidth: 1,
                      marginTop: 9,
                    }}
                  >
                    <TextInput
                      style={{ fontSize: 17, height: 20 }}
                      clearButtonMode="always"
                      onChangeText={(text) => onChangeText(text)}
                      placeholderTextColor="#D8D8D8"
                      placeholder="mật khẩu mới"
                    />
                  </View>
                </View>
                <View
                  style={{
                    height: 60,
                    flexDirection: "column",
                    width: "90%",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>Nhập lại mật khẩu mới</Text>
                  <View
                    style={{
                      borderBottomColor: "#c75b39",
                      borderBottomWidth: 1,
                      marginTop: 9,
                    }}
                  >
                    <TextInput
                      style={{ fontSize: 17, height: 20 }}
                      clearButtonMode="always"
                      onChangeText={(text) => onChangeText(text)}
                      placeholderTextColor="#D8D8D8"
                      placeholder="nhập lại mật khẩu mới"
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          width: "100%",
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          marginTop:2,
          marginBottom: 2,
          borderTopWidth:0.2,
          borderBottomWidth:0.2
        }}
      >
        <TouchableOpacity style={{height: 45,width: "90%",backgroundColor: "#c75b39",alignItems:"center",justifyContent: "center"}}>
          <Text style={{ fontSize: 19,color:"#FFF" ,fontWeight:"400"}}>Lưu thay đổi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
});

export default MyUser;
