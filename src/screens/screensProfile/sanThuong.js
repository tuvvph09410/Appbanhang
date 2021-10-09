import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

const sanThuong = () => {
  const [data, setData] = useState([
    {
      name: "Vu Van Tu",
      xu: "Xu",
      magiamgia: "Mã giảm giá",
      button: "Chạm để nhận Thẻ cào",
    },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: "#F2F2F2",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: "100%",
                  alignItems: "center",

                  justifyContent: "center",
                  backgroundColor: "#F79F81",
                }}
              >
                <Text></Text>
              </View>
              <View
                style={{ flex: 10, width: "100%", backgroundColor: "#F2F2F2" }}
              ></View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default sanThuong;
