import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import sanThuong from "./sanThuong";

const MyUserProfile = ({ navigation }) => {
  // khợi tạo mảng chứa dữ liệu chức năng
  const [dataFlastList, getDataFlastList] = useState([
    {
      mangxahoi: "Kết nối mạng xã hội",
      url:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      makhuyenmai: "Mã Khuyến Mãi",
      santhuong: "Săn thưởng",
      danhgiaSP: "Đánh giá sản phẩm",
      quanlyDH: "Quản lý đơn hàng",
      DHdatiepnhan: "Đơn hàng đã tiếp nhận",
      DHchovanchuyen: "Đơn hàng đang chờ vận chuyển",
      DHthanhcong: "Đơn hàng thành công",
      diachi: "Sổ địa chỉ",
      thongtinthanhtoan: "Thông tin thanh toán",
      caidat: "Cài đặt",
      hotro: "Hỗ trợ",
      dangxuat: "Đăng Xuất",
    },
  ]);

  const buttonDangxuat = () => {
    Alert.alert("Đăng Xuất", "Bạn có chắc chắn muốn đăng xuất không ?", [
      {
        text: "Thoát",
        onPress: () => null,
        style: "Thoát",
      },
      {
        text: "Đồng ý",
        onPress: () => navigation.pop(),
      },
    ]);
    return true;
  };
  const buttonThongtinTK = () => {
    navigation.navigate("MyUser");
    return true;
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataFlastList}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              {/* tạo nút hiện thông tin người dùng và click màn hình mới */}
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#fff",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  margin: 10,
                }}
                onPress={buttonThongtinTK}
              >
                <View style={{ flex: 2, margin: 15 }}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                      uri: item.url,
                    }}
                  />
                </View>
                <View style={{ flex: 7, marginLeft: 15 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    VU VAN TU
                  </Text>
                  <Text style={{ margin: 3 }}>0966932493</Text>
                  <Text style={{ marginLeft: 3 }}>tucaogia1@gmail.com</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <AntDesign name="right" size={22} color="#F79F81" />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flex: 4,
                  backgroundColor: "#fff",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F2F2F2",
                }}
              >
                {/* nút kết nối mạng xa hội */}
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 40,
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#fff",
                  }}
                  onPress={() => {
                    navigation.navigate("ketnoimangXH");
                  }}
                >
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <MaterialIcons
                      name="connect-without-contact"
                      size={24}
                      color="#3D7CF3"
                    />
                  </View>
                  <View style={{ flex: 9 }}>
                    <Text style={{ fontSize: 17 }}>{item.mangxahoi}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <AntDesign name="right" size={22} color="#000" />
                  </View>
                </TouchableOpacity>
                {/* nút săn thưởng  */}
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 40,
                    margin: 10,
                    backgroundColor: "#fff",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    navigation.navigate("santhuong");
                  }}
                >
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <AntDesign name="gift" size={24} color="#F3AE3D" />
                  </View>
                  <View style={{ flex: 9 }}>
                    <Text style={{ fontSize: 17 }}>{item.santhuong}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <AntDesign name="right" size={22} color="#000" />
                  </View>
                </TouchableOpacity>
                {/* nút đánh giá sản phẩm */}
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <MaterialIcons
                      name="rate-review"
                      size={24}
                      color="#D47244"
                    />
                  </View>
                  <View style={{ flex: 9 }}>
                    <Text style={{ fontSize: 17 }}>{item.danhgiaSP}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <AntDesign name="right" size={22} color="#000" />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: "100%",
                    marginTop: 10,
                    backgroundColor: "#F2F2F2",
                    flexDirection: "column",
                  }}
                >
                  {/* nút quản lý đơn hàng */}
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 50,
                      backgroundColor: "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ flex: 1, marginLeft: 15 }}>
                      <MaterialIcons
                        name="filter-list"
                        size={24}
                        color="black"
                      />
                    </View>
                    <View style={{ flex: 9 }}>
                      <Text style={{ fontSize: 17 }}>{item.quanlyDH}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <AntDesign name="right" size={22} color="#000" />
                    </View>
                  </TouchableOpacity>
                  {/* nút đơn hàng tiếp nhận */}
                  <TouchableOpacity
                    style={{
                      height: 50,
                      width: "100%",
                      backgroundColor: "#fff",
                      marginTop: 2,
                      justifyConten: "center",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ flex: 10, marginLeft: 15 }}>
                      <Text style={{ fontSize: 17 }}>{item.DHdatiepnhan}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <AntDesign name="right" size={22} color="#000" />
                    </View>
                  </TouchableOpacity>
                  {/* nút đơn hàng đang chờ vận chuyển */}
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 50,
                      marginTop: 2,
                      flexDirection: "row",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 10, marginLeft: 15 }}>
                      <Text style={{ fontSize: 17 }}>
                        {item.DHchovanchuyen}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <AntDesign name="right" color="#000" size={22} />
                    </View>
                  </TouchableOpacity>
                  {/* nút đơn hàng thành công */}
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      height: 50,
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                      backgroundColor: "#fff",
                    }}
                  >
                    <View style={{ flex: 10, marginLeft: 15 }}>
                      <Text style={{ fontSize: 17 }}>{item.DHthanhcong}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <AntDesign name="right" color="#000" size={22} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    backgroundColor: "#F2F2F2",
                    width: "100%",
                    marginTop: 10,
                    flexDirection: "column",
                  }}
                >
                  {/* nút địa chỉ */}
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 50,
                      flexDirection: "row",
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1, marginLeft: 15 }}>
                      <SimpleLineIcons
                        name="location-pin"
                        size={24}
                        color="black"
                      />
                    </View>
                    <View style={{ flex: 9 }}>
                      <Text style={{ fontSize: 17 }}>{item.diachi}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <AntDesign name="right" size={22} color="#000" />
                    </View>
                  </TouchableOpacity>
                  {/* nut thanh toán */}
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#fff",
                      width: "100%",
                      height: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <View style={{ flex: 1, marginLeft: 15 }}>
                      <MaterialIcons name="payment" size={24} color="black" />
                    </View>
                    <View style={{ flex: 9 }}>
                      <Text style={{ fontSize: 17 }}>
                        {item.thongtinthanhtoan}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <AntDesign name="right" size={22} color="#000" />
                    </View>
                  </TouchableOpacity>
                </View>
                {/* nút cài đặt */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 40,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    marginTop: 10,
                  }}
                >
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Ionicons
                      name="ios-settings-outline"
                      size={24}
                      color="black"
                    />
                  </View>
                  <View style={{ flex: 9 }}>
                    <Text style={{ fontSize: 17 }}>{item.caidat}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <AntDesign name="right" size={22} color="#000" />
                  </View>
                </TouchableOpacity>
                {/* nút hộ trợ */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    height: 40,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <MaterialIcons
                      name="support-agent"
                      size={24}
                      color="black"
                    />
                  </View>
                  <View style={{ flex: 9 }}>
                    <Text>{item.hotro}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <AntDesign name="right" size={22} color="#000" />
                  </View>
                </TouchableOpacity>
                {/* nút đăng xuất */}
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    height: 50,
                    width: "90%",
                    marginTop: 10,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#c75b39",
                  }}
                  onPress={buttonDangxuat}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#c75b39",
                    }}
                  >
                    {item.dangxuat}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },
});
export default MyUserProfile;
