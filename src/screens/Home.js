import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const Home = ({ navigation }) => {
  const [stateList, setStateList] = useState([]);

  fetch("http://192.168.64.2/SQLBanHang/BanHangGetAll.php")
    .then((response) => response.json())
    .then((json) => {
      setStateList(json);
    });
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={stateList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ padding: 21 }}
              onPress={
                (() => navigation.navigate("About",{ namesp: item.tensp }))
              }
            >
              <Image
                style={{ height: 90, width: 90, margin: 5 }}
                source={{ uri: item.images }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {" "}
                {item.id}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Tên: </Text>
                {item.tensp}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Giá Sản Phẩm: </Text>{" "}
                {item.giasp}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Mô Tả: </Text>
                {item.mota}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Loại: </Text>
                {item.idLoaiSP}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
